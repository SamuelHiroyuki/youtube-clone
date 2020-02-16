import styled, { css } from "styled-components";

export const Container = styled.div`
	height: 56px;
	padding: 0 16px;

	display: flex;
	justify-content: space-between;
	align-items: center;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& form {
		position: relative;
		width: 100%;
		max-width: 640px;
		height: 30px;
		display: flex;
		align-items: center;
		margin: 0 50px;

		input {
			width: 100%;
			height: 30px;
			border-radius: 2px 0 0 2px;
			border: 1px solid #d3d3d3;
			border-right: none;

			font-size: 16px;
			font-weight: 400;
			padding-left: 6px;
		}

		& input + svg {
			position: absolute;
			right: 85px;
			opacity: 0.7;
			cursor: pointer;
		}

		& input + svg:hover {
			opacity: 1;
		}

		button {
			width: 75px;
			height: 30px;
			border: 1px solid #d3d3d3;
			padding: 1px 5px;
			border-radius: 0 2px 2px 0;
			cursor: pointer;
			display: flex;
			justify-content: center;
			align-items: center;

			svg {
				opacity: 0.6;
			}

			&:hover {
				svg {
					opacity: 1;
				}
			}
		}
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

	${({ flex }) =>
		flex &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
		`}
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

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin: 0 24px 0 14px;
	cursor: pointer;
`;

export const Badge = styled.div`
	width: 18px;
	height: 18px;
	border-radius: 50%;
	background-color: #c00;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 10px;
	position: absolute;
	top: 4px;
	right: 0px;
`;
