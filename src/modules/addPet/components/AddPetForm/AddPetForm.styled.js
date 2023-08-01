import { Form } from "formik";
import styled from "styled-components";

export const FormBox = styled(Form)`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 20px 8px;
	height: 100%;
	min-height: 496px;
	width: 100%;
	max-width: 280px;

	border-radius: 40px;
	box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
	background-color: #fff;

	@media ${(props) => props.theme.media.tablet} {
		padding: 20px 32px;
		min-height: 542px;
		max-width: 458px;
	}
`;

export const ChooseSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media ${(props) => props.theme.media.tablet} {
	}
`;

export const TitleBox = styled.div`
	display: flex;
	flex-direction: column;
`;

export const AddPetFormTitle = styled.h2`
	padding-left: 20px;
	font-family: Manrope, sans-serif;
	font-size: 20px;
	font-weight: 500;
	width: fit-content;

	color: #111;

	@media ${(props) => props.theme.media.tablet} {
		padding-left: 0;

		font-size: 28px;
	}
`;

export const Steps = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 16px;
`;

export const StepTitle = styled.h3`
	position: relative;
	width: 80px;
	height: 34px;
	text-align: left;

	font-family: Manrope, sans-serif;
	font-size: 10px;
	font-weight: 500;

	color: ${(props) =>
		props.isActive ? props.theme.colors.primary : props.theme.colors.grey};

	&:after {
		content: "";
		position: absolute;
		background-color: ${(props) =>
			props.isActive
				? props.theme.colors.primary
				: props.theme.colors.blueLight};
		border-radius: 8px;
		height: 8px;
		width: 100%;
		top: 25px;
		left: 0;

		@media ${(props) => props.theme.media.tablet} {
			top: 35px;
		}
	}

	&:nth-child(1) {
		color: ${(props) => props.isCompleated && props.theme.colors.green};
	}

	&:nth-child(1)::after {
		background-color: ${(props) =>
			props.isCompleated && props.theme.colors.green};
	}

	&:nth-child(2) {
		color: ${(props) => props.isCompleated && props.theme.colors.green};
	}

	&:nth-child(2)::after {
		background-color: ${(props) =>
			props.isCompleated && props.theme.colors.green};
	}

	@media ${(props) => props.theme.media.tablet} {
		width: 120px;
		height: 47px;
		font-size: 16px;
		line-height: 1.65;
	}
`;
