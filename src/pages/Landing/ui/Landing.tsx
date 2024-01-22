import { useEffect, useState } from "react";
import cls from './Landing.module.scss';

import posts from "data/posts/posts.json";
import stories from "data/stories/stories.json";
import { Post } from "models/post/Post";

import { Navbar } from "components/Navbar";
import { Content } from "components/Content";
import { ModalPost } from "components/ModalPost";
import { Story } from "components/Story";
import { Footer } from "components/Footer";
import { ModalAbout } from "components/ModalAbout";

export const Landing = () => {

	const [searchValue, setSearchValue] = useState("");
	const [modalOpen, setModalOpen] = useState(false);
	const [modalAbout, setModalAbout] = useState(false);
	const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
	const [allPosts, setAllPosts] = useState<Post[]>([]);
	const [filteredPost, setFilteredPost] = useState<Post[]>([]);
	const [storiesOpen, serStoriesOpen] = useState(false);

	useEffect(() => {
		setAllPosts([...allPosts, ...posts]);
		setFilteredPost([...filteredPost, ...posts]);
	}, []);

	const onSearchValueChange = (newValue: string) => {
		setSearchValue(newValue);

		let filteredPost = allPosts.filter((e) => e.description.toLocaleUpperCase().includes(newValue.toUpperCase()));
		setFilteredPost([...filteredPost]);
	}

	const selectPost = (post: Post) => {
		setSelectedPost(post);
		setModalOpen(true);
		document.body.style.overflow = "hidden";
	}

	const closeModal = () => {
		setModalOpen(false);
		document.body.style.overflow = "auto";
	}

	const openStories = () => {
		serStoriesOpen(true);
	}

	const closeStory = () => {
		serStoriesOpen(false);
	}

	return (
		<>
			<Navbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} setModalAbout={setModalAbout} />
			<main className={cls.main_container}>
				<Content openStories={openStories} posts={filteredPost} selectPost={selectPost} />
				{modalOpen && <ModalPost onClose={closeModal} post={selectedPost} />}
				{storiesOpen && <Story stories={stories} closeStory={closeStory} />}
				{modalAbout && <ModalAbout setModalAbout={setModalAbout} />}
			</main>
			<Footer />
		</>
	);
}