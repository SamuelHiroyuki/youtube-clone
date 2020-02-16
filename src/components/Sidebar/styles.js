import styled from "styled-components";

export const Container = styled.div`
	width: ${({ expanded }) => (expanded ? "72px" : "72px")};
	height: 100vh;
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
	height: 74px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	cursor: pointer;

	&:hover {
		background-color: #dbdbdbaa;
	}

	span {
		font-size: 10px;
		margin-top: 6px;
	}
`;
