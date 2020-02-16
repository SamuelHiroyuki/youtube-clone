import React from "react";
import { IoIosMenu } from "react-icons/io";

import data from "../../data/sidebar.js";
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";

import {
	Container,
	Item,
	ItemContainer,
	SectionTitle,
	Footer,
	Button,
	LogoConteiner
} from "./styles";

export default function Sidebar({ expanded }) {
	console.log(expanded);
	return (
		<Container expanded={expanded}>
			{expanded ? (
				<>
					<ItemContainer>
						{data.main.map((d, i) => (
							<Item key={i} active={i === 0} expanded={expanded}>
								{d.icon}
								<span>{d.title}</span>
							</Item>
						))}
					</ItemContainer>
					<ItemContainer>
						{data.secundary.map((d, i) => (
							<Item key={i} expanded={expanded}>
								{d.icon}
								<span>{d.title}</span>
							</Item>
						))}
					</ItemContainer>
					<ItemContainer>
						<SectionTitle>Inscrições</SectionTitle>
						{data.subscribers.map((d, i) => (
							<Item key={i} expanded={expanded}>
								{d.icon}
								<span>{d.title}</span>
							</Item>
						))}
					</ItemContainer>
					<ItemContainer>
						<SectionTitle>mais do YouTube</SectionTitle>
						{data.more.map((d, i) => (
							<Item key={i} expanded={expanded}>
								{d.icon}
								<span>{d.title}</span>
							</Item>
						))}
					</ItemContainer>
					<ItemContainer>
						{data.others.map((d, i) => (
							<Item key={i} expanded={expanded}>
								{d.icon}
								<span>{d.title}</span>
							</Item>
						))}
					</ItemContainer>
					<Footer>
						<div>
							<a href="#">Sobre</a>
							<a href="#">Imprensa</a>
							<a href="#">Direitos autorais</a>
							<a href="#">Entre em contato</a>
							<a href="#">Criadores de conteúdo</a>
							<a href="#">Publicidade</a>
							<a href="#">Desenvolvedores</a>
						</div>
						<div>
							<a href="#">Termos</a>
							<a href="#">Privacidade</a>
							<a href="#">Política e Segurança</a>
							<a href="#">Testar os novos recursos</a>
						</div>
						<div>@ 2020 Google LLC</div>
					</Footer>
				</>
			) : (
				<>
					{data.main.map((d, i) => (
						<Item key={i} expanded={expanded}>
							{d.icon}
							<span>{d.title}</span>
						</Item>
					))}
					<Item expanded={expanded}>
						{data.secundary[0].icon}
						<span>{data.secundary[0].title}</span>
					</Item>
				</>
			)}
		</Container>
	);
}

/* <header>
	<Button>
		<IoIosMenu size={26} />
	</Button>
	<LogoConteiner>
		<Logo />
		<span>BR</span>
	</LogoConteiner>
</header> */
