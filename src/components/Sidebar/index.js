import React from "react";
import { IoIosMenu } from "react-icons/io";

import data from "../../data/sidebar.js";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

import { Container, Item, Button, LogoConteiner } from "./styles";

export default function Sidebar({ collapsed }) {
	console.log(collapsed);
	return (
		<Container>
			{/* <header>
				<Button>
					<IoIosMenu size={26} />
				</Button>
				<LogoConteiner>
					<Logo />
					<span>BR</span>
				</LogoConteiner>
			</header> */}
			{data.main.map(d => (
				<Item>
					{d.icon}
					<span>{d.title}</span>
				</Item>
			))}
			{
				<Item>
					{data.secundary[0].icon}
					<span>{data.secundary[0].title}</span>
				</Item>
			}
		</Container>
	);
}
