import { useState, useEffect, useRef } from "react";
import { Story as StoryModel } from "models/story/Story";
import cls from './Story.module.scss';
import vanpanchmen_img from '/public/assets/images/vanpanchmen-stories.jpg'
import left_arrow from '/public/assets/images/left-arrow-icon.ico';
import right_arrow from '/public//assets/images/right-arrow-icon.ico';
import Dots from '/public/assets/images/three-dots-icon.svg';
import Cancel from '/public/assets/images/cancel.svg';

interface Props {
	closeStory: Function;
	stories: StoryModel[];
}

export const Story = ({ closeStory, stories }: Props) => {
	const [storyPaused, setStoryPaused] = useState(false);
	const [storyIndex, setStoryIndex] = useState(0);
	const storyIndexRef = useRef(0);

	const onClickStory = (element: EventTarget) => {
		if ((element as HTMLElement).className === cls.wrapper) closeStory();
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

	const getProgressBarClassName = (index: number) => {
		if (index < storyIndex) {
			return `${cls.progress_bar} ${cls.progress_bar_finished}`;
		} else if (index === storyIndex) {
			return storyPaused ? `${cls.progress_bar} ${cls.progress_bar_active} ${cls.progress_bar_paused}` : `${cls.progress_bar} ${cls.progress_bar_active}`;
		} else {
			return cls.progress_bar;
		}
	}

	return (
		<div className={cls.wrapper} onClick={(e) => onClickStory(e.target)}>
			<div className={cls.close_modal} onClick={() => closeStory()}>
				<Cancel />
			</div>
			<div className={`${cls.story} container`}>
				<div className={cls.title}>
					<img src={vanpanchmen_img} alt="Аватар" />
					<div className={cls.details}>
						<span>#vanpanchmen</span>
						<span>userName</span>
					</div>
					{storyPaused && <div className={cls.pause}>PAUSED</div>}
					<Dots className={cls.story_img_dots} />
				</div>
				<div className={cls.progress_bars}>
					{
						stories.map((story, index) => (
							<div className={cls.progress_bar_container}>
								<div style={{ animationDuration: `${story.duration}s` }} className={getProgressBarClassName(index)}></div>
							</div >
						))}
				</div >
				<div className={cls.video}>
					<video
						id="video"
						onMouseDown={() => setStoryPaused(true)}
						onMouseUp={() => setStoryPaused(false)}
						autoPlay
						src={stories[storyIndex].video_url}>
					</video>
					{
						storyIndex !== 0 &&
						<img
							onClick={() => (setStoryIndex((value) => value - 1))}
							className={`${cls.previous} ${cls.arrow} ${cls.hoverable}`}
							src={left_arrow}
							alt="Стрелка"
						/>
					}
					{
						storyIndex !== stories.length - 1 &&
						<img
							onClick={() => (setStoryIndex((value) => value + 1))}
							className={`${cls.next} ${cls.arrow} ${cls.hoverable}`}
							src={right_arrow}
							alt="Стрелка"
						/>
					}
				</div >
			</div >
		</div >
	);
}