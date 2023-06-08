import React, { useEffect, useState } from "react";
import "./Landing.css";

import Content from "../content/Content";
import Navbar from "../navbar/Navbar";
import { Post } from "../../models/post/Post";
import Modal from "../modal/Modal";

import posts from "../../data/posts/posts.json"
import stories from "../../data/stories/stories.json"
import Story from "../story/Story";

export default function Landing() {

	const [searchValue, setSearchValue] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
	const [allPosts, setAllPosts] = useState<Post[]>([]);
	const [filteredPost, setFilteredPost] = useState<Post[]>([]);
	const [storiesOpen, serStoriesOpen] = useState(false);

	useEffect(() => {
		setAllPosts([...allPosts, ...posts]);
		setFilteredPost([...filteredPost, ...posts]);
	}, []);

	function onSearchValueChange(newValue: string) {
		setSearchValue(newValue);

		let filteredPost = allPosts.filter((e) => e.description.toLocaleUpperCase().includes(newValue.toUpperCase()));
		setFilteredPost([...filteredPost]);
	}

	function selectPost(post: Post) {
		setSelectedPost(post);
		setModalOpen(true);
		document.body.style.overflow = "hidden";
	}

	function closeModal() {
		setModalOpen(false);
		document.body.style.overflow = "auto";
	}

	function openStories() {
		serStoriesOpen(true);
	}

	function closeStory() {
		serStoriesOpen(false);
	}

	return (
		<div>
			<Navbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
			<main className="main-container">
				<Content openStories={openStories} posts={filteredPost} selectPost={selectPost} />
				{modalOpen && <Modal onClose={closeModal} post={selectedPost} />}
				{storiesOpen && <Story stories={stories} closeStory={closeStory} />}
			</main>
		</div>
	);
}