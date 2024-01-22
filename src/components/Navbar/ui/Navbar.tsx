import cls from './Navbar.module.scss';
import { Searchbar } from "components/Searchbar";
import { Link } from "react-router-dom";

interface Props {
	searchValue: string;
	onSearchValueChange: Function;
	setModalAbout: (status: boolean) => void;
}

export const Navbar = ({ searchValue, onSearchValueChange, setModalAbout }: Props) => {

	return (
		<header className={cls.wrapper}>
			<div className={`${cls.content} container`}>
				<Link to='#'>
					<h1 className={cls.logo}>InstaPanchmen</h1>
				</Link>
				<Searchbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
				<button
					className={cls.btn}
					type="button"
					onClick={() => setModalAbout(true)}>
					О сайте
				</button>
			</div>
		</header>
	);
}