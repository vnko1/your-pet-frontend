import { Field } from "formik";
import styled from "styled-components";

export const RadioContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

export const RadioLabel = styled.label`
	display: inline-block;
	width: fit-content;
	padding: 8px 16px;

	border-radius: 40px;

	font-family: Manrope, sans-serif;
	font-size: 14px;
	font-weight: 500;
	letter-spacing: 0.56px;

	background-color: ${(props) =>
		props.checked ? props.theme.colors.primary : props.theme.colors.blueLight};
	color: ${(props) =>
		props.checked ? props.theme.colors.background : props.theme.colors.primary};
`;

export const RadioInput = styled(Field)`
	display: none;
`;
