import React from 'react';
import Photo from './Photo';

//findIndex is new to the browser
const Single = React.createClass({
	render(){
		const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
		const post = this.props.posts[i]
		console.log(i)
		console.log(post)
		return(
			<h3 className="single-photo">
				I am in the single class
			</h3>
		)
	}
})

export default Single;