import styled from "styled-components";
import { Form, Field } from "formik";

export const UserImgBox = styled.div`
	margin-bottom: 32px;
	position: relativ;
	img {
		width: 140px;
		height: 135px;
		object-fit: cover;
		display: block;
		margin: auto;
		border-radius: 20%;
		max-width: 100%;
	}
`;

export const UserImgInputBody = styled.div`
	position: relative;
`;

export const UserImgInput = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;

export const UserFormBody = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 21px;

	@media ${(props) => props.theme.media.tablet} {
		flex-direction: row-reverse;
		justify-content: space-between;
	}

	@media ${(props) => props.theme.media.desktop} {
		flex-direction: column;
		gap: 25px;

	}
`;
export const UserFormInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 21px;
	width: 100%;

	@media ${(props) => props.theme.media.tablet} {
		max-width: 355px;
		gap: 10px;
	}
`;

export const UserFormList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: 100%;

	@media ${(props) => props.theme.media.tablet} {
		gap: 10px;
	}
`;

export const UserFormItem = styled.li`
	display: flex;
	justify-content: space-between;
	width: 100%;

	/* &:not(:last-child) {
    margin-bottom: 15px;
  } */
`;

export const UserFormLabel = styled.label`
	font-weight: 500;
	font-size: 16px;
	line-height: 1, 112;
	/* flex: 0 0 85px; */

	@media screen and (min-width: 320px) {
		font-size: 14px;
		/* flex: 0 0 60px; */
	}
`;

export const UserFormInput = styled(Field)`
	outline: 0;
	background: none;

	flex: 1 1 auto;

	max-width: 190px;
	height: 28px;
	padding: 4px 12px;
	background: blue;
	background: none;

	border: 1px solid #54adff;
	border-radius: 40px;

	font-size: 12px;

	@media ${(props) => props.theme.media.tablet} {
		max-width: 255px;
		height: 30px;
	}
`;

export const UserFormBtn = styled.button`
	align-items: center;
	display: flex;
	justify-content: center;
	height: 31px;
	width: 100%;
	padding: 0;

	border: none;

	background: white;
	color: rgba(136, 136, 136, 1);
	font-size: 18px;

	@media ${(props) => props.theme.media.tablet} {
		justify-content: end;
		height: 32px;
	}
`;

export const Btn = styled.button`
	max-width: 248px;
	flex: 1 1 auto;

	border-radius: 40px;
	padding: 8px 12px;

	font-weight: 500;
	font-size: 20px;
	font-family: Manrope, sans-serif;
	text-align: center;
	color: #fff;
	background-color: #54adff;

	border: 1px solid rgba(255, 255, 255, 0.7);
	border-radius: 25px;

	transition: all 250ms ease-in-out;

	cursor: pointer;

	@media ${(props) => props.theme.media.tablet} {
		max-width: 255px;
	}
`;
export const BtnText = styled.p`
	display: flex;
	flex-direction: row;
	margin-right: auto;
`;
