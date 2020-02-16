import React from "react";
import { IoIosMenu, IoMdSearch } from "react-icons/io";
import { GoDeviceCameraVideo } from "react-icons/go";
import { MdApps } from "react-icons/md";
import { AiFillBell } from "react-icons/ai";
import { FaKeyboard } from "react-icons/fa";

import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import avatar from "../../assets/images/avatar.png";

import { Container, Button, LogoConteiner, Avatar, Badge } from "./styles";

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

			<form action="">
				<input type="text" placeholder="Pesquisar" />
				<FaKeyboard size={16} color="#333" />
				<button type="button">
					<IoMdSearch size={20} color="#333" />
				</button>
			</form>

			<div>
				<Button flex>
					<GoDeviceCameraVideo size={16} color="#606060" />
				</Button>
				<Button flex>
					<MdApps size={24} color="#606060" />
				</Button>
				<Button flex>
					<AiFillBell size={22} color="#606060" />
					<Badge>9+</Badge>
				</Button>

				<Avatar src={avatar} />
			</div>
		</Container>
	);
}
