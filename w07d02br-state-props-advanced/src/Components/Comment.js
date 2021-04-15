import React, { useState } from 'react';
import './comment.css'

function Comment(props) {
	// props.id props.image,
	const { id, image, content, likes, dislikes } = props.data;
	console.log(props);
	// $('#buttonCLick').on('click', (evt) => {/..})
	const onLikeClick = () => {
		console.log(props);
		props.handleClick(id, 'like');
	}

	const onDislikeClick = () => {
		props.handleClick(id, 'dislike');
	}


	return (
		<div className='comment'>
			<img className='image' src={image}/>
			<p className="content">{content}</p>
			<div className="buttons">
				<button onClick={onLikeClick}>Like {likes}</button>
				<button onClick={onDislikeClick}>Dislike {dislikes}</button>
			</div>
		</div>
	)
}


export default Comment;