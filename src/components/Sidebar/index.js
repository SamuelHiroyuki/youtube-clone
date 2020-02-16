import React from "react";
import { IoIosMenu } from "react-icons/io";

import data from "../../data/sidebar.js";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

import { Container, Item, Button, LogoConteiner } from "./styles";

export default function Sidebar({ expanded }) {
	console.log(expanded);
	return (
		<Container expanded={expanded}>
			{expanded ? (
				<></>
			) : (
				<>
					{data.main.map(d => (
						<Item>
							{d.icon}
							<span>{d.title}</span>
						</Item>
					))}
					<Item>
						{data.secundary[0].icon}
						<span>{data.secundary[0].title}</span>
					</Item>
				</>
			)}
		</Container>
	);
}
