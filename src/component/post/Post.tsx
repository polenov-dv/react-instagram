import React from "react";
import { Post as PostModel } from "../../models/post/Post";
import "./Post.css";

interface Props {
	post: PostModel;
	selectPost: Function;
}

export default function Post({ post, selectPost }: Props) {
	function onClick() {
		selectPost(post);
	}

	return (
		<div
			onClick={(e) => {
				onClick();
			}}
			className="post-container">
			<div className="post">
				<a href="#" style={{ backgroundImage: `url(${post.image_url})` }} className="post-image"></a>
				<div className="post-overlay">
					<span>
						<img src="./assets/images/heart-icon.svg" alt="Heart" className="post-intro-img"></img>
						{post.likes}
					</span>
					<span>
						<img src="./assets/images/comment-icon.svg" alt="Comment" className="post-intro-img"></img>
						{post.comments.length}
					</span>
				</div>
			</div>
		</div>
	);
} 