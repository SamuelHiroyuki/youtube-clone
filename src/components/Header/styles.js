import styled from "styled-components";

export const Container = styled.div`
	height: 56px;
	padding: 0 16px;
	background-color: #f00;

	display: flex;
	justify-content: space-between;
	align-items: center;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const Button = styled.button`
	width: auto;
	height: 25px;
	border: none;
	margin: 5px;

	cursor: pointer;
`;

export const LogoConteiner = styled.div`
	width: 129px;
	height: 21px;
	position: relative;

	& span {
		position: absolute;
		top: 0;
		right: 4px;
		font-size: 10px;
	}
`;
