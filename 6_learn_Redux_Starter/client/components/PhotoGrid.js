import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
	render(){
		return(
			<h3 className="photo-grid">
				{this.props.posts.map((post, i) => <Photo />)}
			</h3>
		)
	}
})

export default PhotoGrid;