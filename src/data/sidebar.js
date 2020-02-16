import React from "react";

import { MdHistory } from "react-icons/md";
import { AiFillClockCircle } from "react-icons/ai";
import { IoMdPricetag, IoIosArrowDown } from "react-icons/io";

import { ReactComponent as Home } from "../assets/svgs/home.svg";
import { ReactComponent as Fire } from "../assets/svgs/fire.svg";
import { ReactComponent as Subs } from "../assets/svgs/subs.svg";
import { ReactComponent as Originals } from "../assets/svgs/originals.svg";
import { ReactComponent as Library } from "../assets/svgs/library.svg";
import { ReactComponent as Like } from "../assets/svgs/like.svg";
import { ReactComponent as Film } from "../assets/svgs/film.svg";
import { ReactComponent as Games } from "../assets/svgs/games.svg";
import { ReactComponent as Live } from "../assets/svgs/live.svg";
import { ReactComponent as Gear } from "../assets/svgs/gear.svg";
import { ReactComponent as Flag } from "../assets/svgs/flag.svg";
import { ReactComponent as Help } from "../assets/svgs/help.svg";
import { ReactComponent as Feedback } from "../assets/svgs/feedback.svg";

const style = {
	width: 24,
	height: 24,
	fill: "#606060"
};

export default {
	main: [
		{
			title: "Início",
			icon: <Home style={{ ...style, fill: "#f00" }} />,
			info: null
		},
		{ title: "Em alta", icon: <Fire style={style} />, info: null },
		{ title: "Inscrições", icon: <Subs style={style} />, info: null },
		{ title: "Originals", icon: <Originals style={style} />, info: null }
	],
	secundary: [
		{ title: "Biblioteca", icon: <Library style={style} />, info: null },
		{ title: "Histórico", icon: <MdHistory style={style} />, info: null },
		{
			title: "Assistir mais tarde",
			icon: <AiFillClockCircle style={style} />,
			info: null
		},
		{ title: "Compras", icon: <IoMdPricetag style={style} />, info: 1 },
		{
			title: 'Vídeos marcados com "Gostei"',
			icon: <Like style={style} />,
			info: null
		},
		{
			title: "Mostrar mais",
			icon: <IoIosArrowDown style={style} />,
			info: null
		}
	],
	subscribers: [
		{
			title: "Cherry 葵",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l78CgLUmESUcuvNh1-3cLNbhKiSo2A_G_j8eyw=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: Live
		},
		{
			title: "JFlaMusic ♪",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l79w3oQTvVzbqRQKUEJ_teiEx8N0jQCFAjYwIg=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: null
		},
		{
			title: "Syros",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l7-6YahiA6H436ZEtOsCJniDtMoY85Ppmox9LA=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: null
		},
		{
			title: "Rocketseat",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l7_gRI0RdRC_VNg535o0C21ltP0eTFhi4rjRmw=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: null
		},
		{
			title: "Love Aimer Forever",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l7-JtHzaPJtZ9QXydfMjNMVQse7e1OwM_63z2w=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: null
		},
		{
			title: "Intoxi Anime",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l79lp5lrdKlTfk8uJLxYSmWuGqoX0JuW1-wLBg=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: null
		},
		{
			title: "MrSuicideSheep",
			icon: (
				<img
					src="https://yt3.ggpht.com/a/AGF-l7968iZ3G3PUCj6VsF43y9o_wcDeEkab357QCA=s288-c-k-c0xffffffff-no-rj-mo"
					alt=""
				/>
			),
			info: null
		},
		{
			title: "Mostrar mais 477",
			icon: <IoIosArrowDown style={style} />,
			info: null
		}
	],
	more: [
		{ title: "YouTube Films", icon: <Film style={style} />, info: null },
		{ title: "Jogos", icon: <Games style={style} />, info: null },
		{ title: "Ao vivo", icon: <Live style={style} />, info: null }
	],
	others: [
		{ title: "Configurações", icon: <Gear style={style} />, info: null },
		{
			title: "Histórico de denúncias",
			icon: <Flag style={style} />,
			info: null
		},
		{ title: "Ajuda", icon: <Help style={style} />, info: null },
		{
			title: "Enviar feedback",
			icon: <Feedback style={style} />,
			info: null
		}
	]
};
