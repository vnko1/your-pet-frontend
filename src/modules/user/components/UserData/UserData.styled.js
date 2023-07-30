import styled from "styled-components";

export const UserPageItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;
	width: 100%;
	max-width: 320px;

	@media (${(props) => props.theme.media.tablet}) {
		max-width: 704px;
	}

	@media (${(props) => props.theme.media.desktop}) {
		max-width: 395px;

	}

`;

export const UserFormTitle = styled.h2`
	display: flex;
	flex-direction: row;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	line-height: 1.35;
	color: #000000;

	@media (${(props) => props.theme.media.tablet}) {
		/* font-size: 28px;
    margin-bottom: 24px; */
	}
`;

export const UserFormBox = styled.div`
	position: relative;

	display: flex;
	flex-direction: column;
	padding: 20px 8px;

	background-color: #ffffff;
	box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
	border-radius: 20px;

	@media (${(props) => props.theme.media.tablet}) {
		padding: 20px 76px 16px 20px;
	}

	@media (${(props) => props.theme.media.desktop}) {
    padding: 20px 24px 20px 16px;
    border-radius: 40px;
	}
`;

export const UserBtnPen = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	padding: 0;

	width: 24px;
	height: 24px;

	background-color: inherit;
	background-color: transparent;
	border: none;
	cursor: pointer;
	border: none;

	* {
		stroke: ${({ theme: { colors } }) => colors.primary};
	}
`;

export const Icon = styled.svg`
	/* width: 100%;
	height: 100%; */

	fill: ${(props) => props.theme.colors.primary};
`;

export const UserInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const UserInputFile = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const UserBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: inherit;
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 1.83;
	gap: 11px;
	width: 94px;
	padding: 0;
	background-color: transparent;
	border: none;
	margin-bottom: 22px;
	cursor: pointer;
`;

export const UserLabel = styled.label`
	display: flex;
	/* gap: 11px; */
	/* margin-bottom: 22px; */
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 1.83;

	cursor: pointer;
`;
