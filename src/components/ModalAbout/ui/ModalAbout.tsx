import cls from './ModalAbout.module.scss';
import Close from '/public/assets/images/close-icon.svg';

interface Props {
	setModalAbout: Function;
}

export const ModalAbout = ({ setModalAbout }: Props) => {

	const onClickModal = (element: EventTarget) => {
		if ((element as HTMLElement).className === cls.modal_wrapper) setModalAbout(false);
	}

	return (
		<div onClick={(e) => onClickModal(e.target)} className={cls.modal_wrapper}>
			<div className={cls.close_modal} onClick={() => setModalAbout(false)}>
				<Close />
			</div>
			<div className={`${cls.content} container`}>
				<div>
					<p className={cls.title}>Сайт создан с целью изучения основных концепций React.</p>
					<p className={cls.desc}>В рамках данного проекта реализован интерфейс сайта Instagram который включает:</p>
				</div>
				<ul className={cls.list}>
					<li>
						отображение списка постов согласно БД (файд JSON);
					</li>
					<li>
						отображение информации каждого поста методом выбора;
					</li>
					<li>
						поиск постов по хэштегу;
					</li>
					<li>
						отображение видео-истории пользователя (при клике на аватарку).
					</li>
				</ul>
			</div>
		</div>
	);
};
