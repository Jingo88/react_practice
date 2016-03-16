var Comment = React.createClass({
	rawMarkup: function(){
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return {__html: rawMarkup};
	},

	render : function(){
		return(
				<div className="comment">
					<h2 className="commentAuthor">
						{this.props.author}
					</h2>

					<span dangerouslySetInnerHTML={this.rawMarkup()} />
				</div>
		)
	}
})

var CommentRemove = React.createClass({
	remove: function(comment){
		return function(e){
			e.preventDefault();
			return this.props.onRemove(comment)

		}.bind(this);
	},

	render: function(){
		return(
			<div>
				<button>{this.props.data.author}
				</button>
				<a href data-id={this.props.data.id} className="remove-filter" onClick={this.remove(this.props.data)}>remove</a>
			</div>
		)

	}
})

var CommentList = React.createClass({
	render: function(){
		console.log("we're in the Comment List Now")
		console.log(this.props.data)
		var data = this.props.data
		var eachComment = this.props.data.map(function(comment){
			return(
				<div>
					<Comment author = {comment.author} key={comment.id}>
						{comment.text}
					</Comment>
					<CommentRemove data={comment} />
				</div>
			)
		});
		console.log(eachComment)
		return (
			<div className="commentList">
				{eachComment}
			</div>

		)
	}
})

var CommentForm = React.createClass({
	getInitialState: function(){
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e){
		this.setState({author: e.target.value});
	},
	handleTextChange: function(e){
		this.setState({text: e.target.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if (!text || !author){
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.setState({author: '', text:''});
	},
	render: function(){
		return (
			<form className="commentForm" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="Your Name Here"
					value={this.state.author}
					onChange={this.handleAuthorChange}
				/>
				<input
					type="text"
					placeholder="What would you want to say?"
					value={this.state.text}
					onChange={this.handleTextChange}
				/>
				<input type="submit" value="POST"/>
			</form>
		);
	}
});

var CommentBox = React.createClass({
	//set state data to [], update with poplateComments callback ajax
	getInitialState: function(){ 
		return {data: []};
	},
	populateComments: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data:data})
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		})
	},
	componentDidMount: function(){ //must name this "componentDidMount"
		this.populateComments();
		setInterval(this.populateComments, this.props.pollInterval);
	},
	handleCommentSubmit: function(comment){
		var comments = this.state.data;
		comment.id = Date.now()
		var newComments = comments.concat([comment]);
		this.setState({data: newComments});
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			type: "POST",
			data: comment,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr,status,err){
				this.setState({data: comments});
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},
	render : function(){
		return(
			<div>
				<h1> The Comment Box Holds All Your Shit </h1>
				<CommentList data={this.state.data} />
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		)
	}
})

ReactDOM.render(
	<CommentBox url='/api/comments/' pollInterval={2000}/>,
	document.getElementById('content')
)

