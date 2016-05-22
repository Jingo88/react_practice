import React from 'react';
import Photo from './Photo';
import Comment from './Comments';

//findIndex is new to the browser
const Single = React.createClass({
	render(){
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i]
		
		return(
			<h3 className="single-photo">
				<Photo 
					i={i}
					post = {post}
					{...this.props}/>
				<Comment />
			</h3>
		)
	}
})

export default Single;