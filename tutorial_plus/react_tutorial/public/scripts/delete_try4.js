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
		// console.log("WE ARE IN COMMENT REMOVE")
		// console.log(comment)
		// console.log(this)
		return function(e){
			e.preventDefault();
			return this.props.onRemove(comment)

		}.bind(this);
	},

// Added foundation button class to a tag
	render: function(){
		return(
			<div>
				<a href data-id={this.props.data.id} className="remove-filter button round success" onClick={this.remove(this.props.data)}>Remove {this.props.data.author}</a>
			</div>
		)

	}
})

var CommentList = React.createClass({
	//my_remove is not being recognized because data and props are still not defined yet
	my_remove: function(xyz){
		this.props.removePost(xyz)
	},
	//this.props.data is the state data passed in?
	//when console logging state data it is showing an empty array
	render: function(){
		// starts as empty array but populates quickly
		var data = this.props.data
		// targets the my_remove function inside this class
		var comment_remove = this.my_remove
		console.log("THIS IS MY COMMENT REMOVE")
		console.log(this) //Returns the actual fucking Constructor. WHAT THE FUCK
		console.log(data) // Returns Empty Array
		console.log(comment_remove) // Returns undefined
		var eachComment = this.props.data.map(function(comment){
			// console.log("LOOK AT MY COOOOOOMENT")
			// console.log(this) // This returns undefined
			// console.log(comment) // This is the actual comment
			return(
				<div key={comment.id}>
					<Comment author = {comment.author}>
						{comment.text}
					</Comment>
					<CommentRemove data={comment} onRemove={comment_remove}/>
				</div>
			)
		});
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
	//set state data to [], update with populateComments callback ajax
	getInitialState: function(){ 
		return {data: []};
	},
	//take a look at the state data
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
		// console.log("COMPONENT STATE STUFF")
		// console.log(this)
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
	removePost: function(commentPost){
		var comments = this.state.data.filter(function(comment){
			return commentPost.id !== comment.id
		});

		this.setState({
			data: comments
		});
	},
	render : function(){
		return(
			<div>
				<h1> The Comment Box Holds All Your Shit </h1>
				<CommentList data={this.state.data} removePost={this.removePost}/>
				<CommentForm onCommentSubmit={this.handleCommentSubmit} />
			</div>
		)
	}
})

// Only one ReactDOM.render function. adds a component to a targeted element
// The pollInterval tells us when to rerun/make another request
ReactDOM.render(
	<CommentBox url='/api/comments/' pollInterval={2000}/>,
	document.getElementById('content')
)

// NOTES
// Do not write console.log inside the createClass functions unless it is inside one of the callbacks