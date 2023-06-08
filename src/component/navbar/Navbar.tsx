import React from "react";
import "./Navbar.css"

import Searchbar from "../searchbar/Searcbar";
import Button from "../button/Button";

interface Props {
	searchValue: string;
	onSearchValueChange: Function;
}

export default function Navbar({ searchValue, onSearchValueChange }: Props) {
	return (
		<header className="header-container">
			<div className="header-content">
				<div className="logo-section hoverable">InstaPanchmen</div>
				<Searchbar searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
				<div className="actions-section">
					<Button label="Log In" primary />
					<Button label="Sign Up" />
				</div>
			</div>
		</header>
	);
}