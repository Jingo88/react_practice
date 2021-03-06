import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

//findIndex is new to the browser
const Single = React.createClass({
	render(){
		const { postId } = this.props.params

		const i = this.props.posts.findIndex((post) => post.code === postId);
		const post = this.props.posts[i]

		const postComments = this.props.comments[postId] || [];
		
		return(
			<h3 className="single-photo">
				<Photo 
					i={i}
					post = {post}
					{...this.props}/>
				<Comments 
					postComments = {postComments}
					{...this.props}/>
			</h3>
		)
	}
})

export default Single;