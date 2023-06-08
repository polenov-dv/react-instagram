import React from "react";
import Button from "../button/Button";
import "./ContentDetails.css";

interface Props {
	amount_of_post: number;
	openStories: Function;
}

export default function ContentDetails({ amount_of_post, openStories }: Props) {
	return (
		<div className="content-details-container">
			<div className="cover-img-box">
				<img onClick={() => openStories()} src="./assets/images/vanpanchmen-stories.jpg" alt="Stories-cover" />
			</div>
			<div className="details">
				<span className="title">#anime</span>
				<div className="amount-of-post">
					<span>{amount_of_post}</span>
					<span>posts</span>
				</div>
				<Button primary label="Follow" />
				<div className="hashtags">
					<span>Related hashtags</span>
					<span>#anime</span>
					<span>#vanpanchmen</span>
					<span>#genos</span>
					<span>#tatsumaki</span>
				</div>
			</div>
		</div>
	);
}