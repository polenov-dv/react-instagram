import cls from './ContentDetails.module.scss';
import vanpanchmen_img from '/public/assets/images/vanpanchmen-stories.jpg';

interface Props {
	amount_of_post: number;
	openStories: Function;
}

export const ContentDetails = ({ amount_of_post, openStories }: Props) => {
	return (
		<div className={cls.content}>
			<div className={cls.cover_img}>
				<img className={cls.img_user} onClick={() => openStories()} src={vanpanchmen_img} alt="Stories-cover" />
			</div>
			<div className={cls.details}>
				<span className={cls.title}>Аниме</span>
				<div className={cls.amount_of_post}>
					<span>{amount_of_post}</span>
					<span>постов</span>
				</div>
				<button className={cls.btn} type="button">Подписатся</button>
				<div className={cls.hashtags_wrapper}>
					<span>Связанные хэштеги:</span>
					<div className={cls.hashtags}>
						<span>#ванпачмен</span>
						<span>#генос</span>
						<span>#тацумаки</span>
					</div>
				</div>
			</div>
		</div>
	);
}