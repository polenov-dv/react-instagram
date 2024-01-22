import cls from './Content.module.scss';
import { Post as PostModel } from "models/post/Post";
import { ContentDetails } from "components/ContentDetails";
import { Post } from "components/Post";

interface Props {
	posts: PostModel[];
	selectPost: Function;
	openStories: Function;
}

export const Content = ({ posts, selectPost, openStories }: Props) => {
	return (
		<div className={`${cls.wrapper} container`}>
			<ContentDetails openStories={openStories} amount_of_post={posts.length} />
			<div className={cls.content}>
				{
					posts.map((post, index) => (
						<Post key={index} post={post} selectPost={selectPost} />
					))
				}
			</div>
		</div>
	);
}