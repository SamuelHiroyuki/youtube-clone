import styled, { css } from "styled-components";

export const Container = styled.div`
	height: 56px;
	padding: 0 16px;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	& form {
		position: relative;
		width: 100%;
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

			::placeholder {
				font-size: 16px;
				font-weight: 400;
				padding-left: 6px;
			}
		}

		& input + svg {
			position: absolute;
			right: 80px;
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
	width: ${({ width }) => `${width}px` || "auto"};
	height: 25px;
	border: none;
	margin: 5px;
	position: relative;
	background-color: transparent;
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
	width: 129px;
	height: 21px;
	position: relative;

	& span {
		color: #606060;
		position: absolute;
		top: 0;
		right: 4px;
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
	background-color: ${props => props.theme.primary};
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	font-size: 10px;
	position: absolute;
	top: -5px;
	right: -1px;
`;
