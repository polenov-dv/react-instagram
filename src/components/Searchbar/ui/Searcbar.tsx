import cls from './Searchbar.module.scss';
import search_img from '/public/assets/images/search.png';

interface Props {
	searchValue: string,
	onSearchValueChange: Function
}

export const Searchbar = ({ searchValue, onSearchValueChange }: Props) => {
	return (
		<div className={cls.search_bar}>
			<input
				onChange={(e) => { onSearchValueChange(e.target.value) }}
				className={cls.search_line}
				type="search"
				id="searchbar">
			</input>
			{searchValue === "" && (
				<div
					onClick={(e) => {
						document.getElementById("searchbar")?.focus();
					}}
					className={cls.searc_placeholder}
				>
					<img src={search_img} alt="Search" />
					<span className={cls.search_text}>Поиск</span>
				</div>
			)}
		</div>
	);
}