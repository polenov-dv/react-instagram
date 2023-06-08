import React from "react";
import "./Content.css"

import posts from "../../data/posts/posts.json"
import Post from "../post/Post";
import { Post as PostModel } from "../../models/post/Post";
import ContentDetails from "../content-details/ContentDetails";



interface Props {
	posts: PostModel[];
	selectPost: Function;
	openStories: Function;
}

export default function Content({ posts, selectPost, openStories }: Props) {
	return (
		<div className="content-container">
			<ContentDetails openStories={openStories} amount_of_post={posts.length} />
			<div className="content">
				{
					posts.map((post, index) => (
						<Post key={index} post={post} selectPost={selectPost} />
					))
				}
			</div>
		</div>
	);
}