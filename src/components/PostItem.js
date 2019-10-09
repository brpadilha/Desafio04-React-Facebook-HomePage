import React from 'react';

function PostHeader({ author, date }) {
	return (
		<div id="avatar" src={author.avatar}>
			<div id="details">
				<span>{author.name}</span>
				<span>{date}</span>
			</div>
		</div>
	);
}

function PostComments({ comments }) {
	return (
		<div id="post-comments">
			<div id="divider">
				{comments.map(comment => (
					<div key={comment.id} className="comment">
						<img className="avatar" src={comment.author.avatar} />
						<p>
							<span>{comment.author.name}</span>
							{comment.content}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}

function PostItem({ author, date, content, comments }) {
	return (
		<div className="post">
			<PostHeader author={author} date={date} />
			<p className="post-content">{content}</p>
			<PostComments comments={comments} />
		</div>
	);
}

export default PostItem;
