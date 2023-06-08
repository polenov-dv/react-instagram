import React, { useState, useEffect, useRef } from "react";
import { Story as StoryModel } from "../../models/story/Story";
import "./Story.css"

interface Props {
	closeStory: Function;
	stories: StoryModel[];
}

export default function Story({ closeStory, stories }: Props) {
	const [storyPaused, setStoryPaused] = useState(false);
	const [storyIndex, setStoryIndex] = useState(0);
	const storyIndexRef = useRef(0);

	function onClickStory(element: EventTarget) {
		if ((element as HTMLElement).className === "story-container") closeStory();
	}

	useEffect(() => {
		const video = document.getElementById("video") as HTMLVideoElement;

		video.onended = (e) => {
			if (storyIndexRef.current === stories.length - 1) {
				closeStory();
			} else {
				setStoryIndex((value) => value + 1);
			}

		}
	}, []);

	useEffect(() => {
		storyIndexRef.current = storyIndex;
	}, [storyIndex]);

	useEffect(() => {
		const video = document.getElementById("video") as HTMLVideoElement;
		storyPaused ? video.pause() : video.play();
	}, [storyPaused]);

	function getProgressBarClassName(index: number) {
		if (index < storyIndex) {
			return "progress-bar progress-bar-finished";
		} else if (index === storyIndex) {
			return storyPaused ? "progress-bar progress-bar-active progress-bar-paused" : "progress-bar progress-bar-active";
		} else {
			return "progress-bar";
		}
	}


	return (
		<div className="story-container" onClick={(e) => onClickStory(e.target)}>
			<div className="story">
				<div className="title">
					<img src="./assets/images/vanpanchmen-stories.jpg" alt="" />
					<div className="details">
						<span>#vanpanchmen</span>
						<span>username</span>
					</div>
					<div className="spacer"></div>
					{storyPaused && <div className="pause">PAUSED</div>}
					<img className="story-img-dots hoverable" src="./assets/images/three-dots2-icon.svg" alt="More horiz" />
				</div>
				<div className="progress-bars">
					{stories.map((story, index) => (
						<div className="progress-bar-container">
							<div style={{ animationDuration: `${story.duration}s` }} className={getProgressBarClassName(index)}></div>
						</div>
					))}
				</div>
				<div className="video">
					<video
						id="video"
						onMouseDown={() => setStoryPaused(true)}
						onMouseUp={() => setStoryPaused(false)}
						autoPlay
						src={stories[storyIndex].video_url}>
					</video>
					{storyIndex !== 0 &&
						<img
							onClick={() => (setStoryIndex((value) => value - 1))}
							className="previous arrow hoverable"
							src="./assets/images/left-arrow-icon.ico"
							alt="Left arrow"
						/>
					}
					{storyIndex !== stories.length - 1 &&
						<img
							onClick={() => (setStoryIndex((value) => value + 1))}
							className="next arrow hoverable"
							src="./assets/images/right-arrow-icon.ico"
							alt="Right arrow"
						/>
					}
				</div>
			</div>
		</div>
	);
}