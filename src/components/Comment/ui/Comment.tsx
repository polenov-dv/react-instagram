import { Comment as CommentModel } from "models/comments/Comment";
import cls from './Comment.module.scss';

interface Props {
	comment: CommentModel;
}

export const Comment = ({ comment }: Props) => {
	return (
		<div className={cls.wrapper}>
			<img className={`${cls.profile_img} ${cls.hoverable}`} src={comment.profile_image_url} alt="Comment_img" />
			<div>
				<div>
					<span className={`${cls.username} ${cls.hoverable}`}>{comment.profile_name}</span>
					<span>{comment.message}</span>
				</div>
				<div className={cls.details}>
					{comment.likes > 0 &&
						<span className={cls.hoverable}>{comment.likes} {comment.likes > 1 ? "Likes" : "Like"}</span>
					}
					<span className={cls.hoverable}>Reply</span>
				</div>
			</div>
		</div>
	);
}
