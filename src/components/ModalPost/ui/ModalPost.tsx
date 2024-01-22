import cls from './ModalPost.module.scss';

import { Post } from "models/post/Post";
import { Comment } from "components/Comment";

import Close from '/public/assets/images/close-icon.svg';
import Dots from '/public/assets/images/three-dots-icon.svg';
import Instagram from '/public/assets/images/Instagram.svg';
import WhatsApp from '/public/assets/images/WhatsApp.svg';
import Telegram from '/public/assets/images/Telegram.svg';
import Twitter from '/public/assets/images/Twitter.svg';

interface Props {
	post?: Post;
	onClose: Function;
}

export const ModalPost = ({ onClose, post }: Props) => {

	const onClickModal = (element: EventTarget) => {
		if ((element as HTMLElement).className === cls.modal_wrapper) onClose();
	}

	return (
		<div onClick={(e) => onClickModal(e.target)} className={cls.modal_wrapper}>
			<div className={cls.close_modal} onClick={() => onClose()}>
				<Close />
			</div>
			<div className='container'>
				<div className={cls.modal}>
					<div style={{ backgroundImage: `url(${post.image_url})` }} className={cls.modal_image}>
					</div>
					<div className={cls.modal_content}>
						<div className={cls.modal_top}>
							<img className={cls.img_profile} src={post?.profile_url} alt="Пользователь" />
							<div className={cls.user_name}>{post?.profile_name}</div>
							<button className={cls.btn} type="button">Подписатся </button>
							<Dots className={cls.img_dots} />
						</div>
						<div className={cls.modal_comments}>
							<div className={cls.comment_user}>
								<div className={cls.user_info}>
									<img className={cls.img_profile} src={post?.profile_url} alt="Пользователь" />
									<span className={cls.user_name_comment}>{post?.profile_name}</span>
								</div>
								<span>{post?.description}</span>
							</div>
							{
								post?.comments.map((comment, index) => (
									<Comment key={index} comment={comment} />
								))
							}
						</div>
						<div className={cls.modal_details}>
							<div className={cls.details}>
								<Instagram className={cls.img_details} />
								<WhatsApp className={cls.img_details} />
								<Telegram className={cls.img_details} />
								<Twitter className={cls.img_details} />
							</div>
							<span>{post?.likes} Likes</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}