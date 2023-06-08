import React from "react";
import "./Modal.css"

import { Post } from "../../models/post/Post";
import Button from "../button/Button";
import Comment from "../comment/Comment";

interface Props {
	post?: Post;
	onClose: Function;
}

export default function Modal({ onClose, post }: Props) {
	function onClickModal(element: EventTarget) {
		if ((element as HTMLElement).className === "modal-container") onClose();
	}

	return (
		<div onClick={(e) => onClickModal(e.target)} className="modal-container">
			<div
				className="close-modal" onClick={() => onClose()}>
				<img src="./assets/images/close-icon.svg" alt="Close" />
			</div>
			<div className="modal">
				<img className="modal-image" src={post?.image_url} alt="Post_image" />
				<div className="modal-content-section">
					<div className="modal-top-section">
						<img className="modal-top-section-img-profile hoverable" src={post?.profile_url} alt="Post_image" />
						<div className="username hoverable">{post?.profile_name}</div>
						<Button label="Follow" />
						<div className="spacer"></div>
						<img className="modal-top-section-img-dots hoverable" src="./assets/images/three-dots-icon.svg" alt="More horiz" />
					</div>
					<div className="modal-comment-section">
						<div className="comment-container">
							<img className="profile-img hoverable" src={post?.profile_url} alt="Comment_img" />
							<div>
								<div>
									<span className="username hoverable">{post?.profile_name}</span>
									<span>{post?.description}</span>
								</div>
							</div>
						</div>
						{post?.comments.map((comment, index) => (
							<Comment comment={comment} />
						))}
					</div>
					<div className="modal-details-section">
						<div className="detaild-action">
							<img src="./assets/images/heart-icon.svg" alt="Heart" className="modal-intro-img space-right-img hoverable"></img>
							<img src="./assets/images/comment-icon.svg" alt="Comment" className="modal-intro-img space-right-img hoverable"></img>
							<img src="./assets/images/send-icon.svg" alt="Send" className="modal-intro-img hoverable"></img>
							<div className="spacer"></div>
							<img src="./assets/images/bookmark-icon.svg" alt="Bookmark" className="modal-intro-img hoverable"></img>
						</div>
						<span>{post?.likes} Likes</span>
					</div>
					<div className="modal-write-section">
						<a href="#">Log in </a>
						to like or commment
					</div>
				</div>
			</div>
		</div>
	)
}