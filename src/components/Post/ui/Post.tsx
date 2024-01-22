import { Post as PostModel } from "models/post/Post";
import cls from './Post.module.scss';

interface Props {
	post: PostModel;
	selectPost: Function;
}

export const Post = ({ post, selectPost }: Props) => {

	const onClick = () => {
		selectPost(post);
	}

	return (
		<div
			onClick={e => onClick()}
			className={cls.wrapper}>
			<div className={cls.post}	>
				<a href="#" style={{ backgroundImage: `url(${post.image_url})` }} className={cls.post_image}></a>
				<div className={cls.post_overlay}>
					<span>
						<img src="./assets/images/heart-icon.svg" alt="Heart" className={cls.post_intro_img}></img>
						{post.likes}
					</span>
					<span>
						<img src="./assets/images/comment-icon.svg" alt="Comment" className={cls.post_intro_img}></img>
						{post.comments.length}
					</span>
				</div>
			</div>
		</div>
	);
} 