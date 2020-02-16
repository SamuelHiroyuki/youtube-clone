import React from "react";
import { IoIosMenu } from "react-icons/io";

import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

import { Container, Button, LogoConteiner } from "./styles";

export default function Header() {
	return (
		<Container>
			<div>
				<Button>
					<IoIosMenu size={26} />
				</Button>
				<LogoConteiner>
					<Logo />
					<span>BR</span>
				</LogoConteiner>
			</div>
		</Container>
	);
}
