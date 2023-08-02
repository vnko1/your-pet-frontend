import { Field } from "formik";
import styled from "styled-components";

export const StageContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
  
  @media ${(props) => props.theme.media.tablet} {
		gap: 24px;
	}

`;

export const FieldContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;

	@media ${(props) => props.theme.media.tablet} {
		gap: 8px;
	}
`;

export const FieldLabel = styled.label`
	display: block;
	font-family: Manrope, sans-serif;
	font-size: 14px;
	font-weight: 500;

	@media ${(props) => props.theme.media.tablet} {
		font-size: 20px;
		line-height: 1.32;
	}
`;

export const InputField = styled(Field)`
	max-width: 100%;
	height: 40px;
	padding: 8px 16px;

	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 40px;

	font-family: Manrope, sans-serif;
	font-size: 14px;
	line-height: 1.5;
	letter-spacing: 0.56px;

	@media ${(props) => props.theme.media.tablet} {
		padding: 12px 16px;
		height: 48px;

		font-size: 16px;
		letter-spacing: 0.64px;
	}

	&::placeholder {
		color: #888;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;

		@media screen and (min-width: 768px) {
			font-size: 16px;
		}
	}
`;
