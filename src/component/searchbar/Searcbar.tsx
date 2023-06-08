import "./Searchbar.css";

interface Props {
	searchValue: string,
	onSearchValueChange: Function
}

export default function Searchbar({ searchValue, onSearchValueChange }: Props) {
	return (
		<div className="search-section">
			<input
				onChange={(e) => { onSearchValueChange(e.target.value) }}
				type="search"
				id="searchbar">
			</input>
			{searchValue === "" && (
				<div onClick={(e) => {
					document.getElementById("searchbar")?.focus();
				}}
					className="searchbar-placeholder">
					<img src="./assets/images/search.png" alt="Search" />
					<span>Search</span>
				</div>
			)}

		</div>
	);
}