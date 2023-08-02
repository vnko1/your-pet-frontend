import styled from "styled-components";

export const ButtonsContaiiner = styled.div`
	display: flex;
	flex-direction: column-reverse;
	gap: 21px;

	@media ${(props) => props.theme.media.tablet} {
		flex-direction: row;
		gap: 24px;

		&.third {
			justify-content: center;
		}
	}
`;

export const IconBtn = styled.svg`
	fill: ${(props) => props.theme.colors.background};
	stroke: ${(props) => props.theme.colors.primary};
`;

export const ButtonForm = styled.button`
	display: flex;
	justify-content: center;
	padding: 8px 28px;
	text-align: center;
	align-content: center;
	align-items: center;
	gap: 12px;

	border: none;
	border-radius: 40px;

	background-color: ${(props) => props.theme.colors.primary};
	color: #fef9f9;

	font-family: Manrope, sans-serif;
	font-size: 16px;
	font-weight: 700;
	letter-spacing: 0.64px;

	@media ${(props) => props.theme.media.tablet} {
		font-size: 16px;
		width: 248px;
	}

	& span {
		margin: auto 0;
		text-align: center;
	}

	&:active {
		background-color: transparent;
		color: ${(props) => props.theme.colors.primary};

		${IconBtn} {
			fill: ${(props) => props.theme.colors.primary};
		}
	}

	&:first-child {
		background-color: transparent;
		color: ${(props) => props.theme.colors.primary};
		text-align: center;
		align-content: center;
		align-items: center;
		@media screen and (min-width: 768px) {
			width: 148px;
		}
	}

	&:first-child:hover {
		background-color: ${(props) => props.theme.colors.primary};
		color: ${(props) => props.theme.colors.background};

		${IconBtn} {
			stroke: ${(props) => props.theme.colors.background};
		}
	}
`;
