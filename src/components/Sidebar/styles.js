import styled, { css } from "styled-components";

export const Container = styled.div`
	overflow-x: hidden;
	height: 100vh;
	width: ${({ expanded }) => (expanded ? "215px" : "72px")};
	${({ expanded }) => expanded && "overflow-y: scroll;"};

	&:hover {
		::-webkit-scrollbar {
			width: 8px;
		}
	}

	::-webkit-scrollbar {
		width: 0;
	}

	::-webkit-scrollbar-track {
		background: #f1f1f1;
	}

	::-webkit-scrollbar-thumb {
		background: #90909055;
	}
`;

export const Button = styled.button`
	width: 24px;
	height: 24px;
	border: none;
	padding: 8px;
	margin-right: 15px;
	position: relative;
	background-color: transparent;
	box-sizing: content-box;
	cursor: pointer;
`;

export const LogoConteiner = styled.div`
	width: 110px;
	height: 24px;
	position: relative;

	& span {
		color: #606060;
		position: absolute;
		top: 0;
		right: -5px;
		font-size: 10px;
	}
`;

export const Item = styled.div`
	width: 100%;

	cursor: pointer;
	display: flex;
	align-items: center;

	${({ expanded, active }) =>
		expanded
			? css`
					height: 38px;
					flex-direction: row;
					padding: 0 24px;
					${active && "background-color: #dbdbdbaa;"}

					svg,
					img {
						margin-right: 20px;
					}

					&:hover {
						background-color: #dbdbdb44;
					}
			  `
			: css`
					height: 74px;
					flex-direction: column;
					justify-content: center;

					&:hover {
						background-color: #dbdbdbaa;
					}
			  `};

	span {
		${({ expanded }) =>
			expanded
				? css`
						font-size: 14px;
				  `
				: css`
						font-size: 10px;
						margin-top: 6px;
				  `};

		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
`;

export const ItemContainer = styled.div`
	padding: 15px 0;
	border-bottom: 1px solid #ddd;
`;

export const SectionTitle = styled.h3`
	color: #606060dd;
	text-transform: uppercase;
	font-size: 14px;
	padding: 8px 24px;
	font-weight: bold;
	letter-spacing: 0.007px;
`;

export const Footer = styled.div`
	width: 100%;

	& div + div + div {
		padding: 16px 24px;
		font-size: 12px;
		color: #60606099;
	}

	& div {
		padding: 16px 24px 0;

		a {
			display: inline-block;
			font-size: 12px;
			color: #606060ee;
			font-weight: bold;
			margin-right: 8px;
		}
	}
`;
