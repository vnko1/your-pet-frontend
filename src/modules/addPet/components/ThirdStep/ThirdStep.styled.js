import { Field } from "formik";
import styled from "styled-components";

const setIconMaleColor = (sex) => {
	switch (sex) {
		case "male":
			return "#fef9f9";
		case "female":
			return "#888";
		default:
			return "#54ADFF";
	}
};

const setIconFemaleColor = (sex) => {
	switch (sex) {
		case "female":
			return "#fef9f9";
		case "male":
			return "#888";
		default:
			return "#f43f5e";
	}
};

export const ThirdStepContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;

	@media screen and (min-width: 768px) {
		flex-direction: ${(props) => (props.isYourPet ? "column" : "row")};
		gap: ${(props) => (props.isYourPet ? "24px" : "34px")};
	}
`;

export const SelectContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

export const GenderBox = styled.div`
	display: flex;
	width: 100%;
	gap: 8px;
`;

export const RadioButtonSex = styled.label`
	display: flex;
	align-items: center;
	width: fit-content;
	padding: 8px 16px;
	gap: 8px;

	font-size: 16px;
	font-weight: 500;
	letter-spacing: 0.56px;

	border-radius: 40px;
	background-color: ${(props) =>
		props.checked ? props.theme.colors.primary : null};
	color: ${(props) => (props.checked ? "#fef9f9" : "#888")};
	cursor: pointer;

	input {
		display: none;
	}

	@media screen and (min-width: 768px) {
		margin-bottom: 0;
	}
`;

export const SexIcon = styled.svg`
	width: 24px;
	height: 24px;
	fill: none;

	&.male {
		stroke: ${(props) => setIconMaleColor(props.sex)};
	}

	&.female {
		stroke: ${(props) => setIconFemaleColor(props.sex)};
	}
`;

export const AvatarContainer = styled.div`
	display: flex;
	gap: 14px;
	align-items: center;

	@media screen and (min-width: 768px) {
		flex-direction: ${(props) => (props.isYourPet ? "row" : "column")};
		align-items: ${(props) => (props.isYourPet ? "center" : "start")};
		margin-top: ${(props) => (props.isYourPet ? "0px" : "40")};
		gap: ${(props) => (props.isYourPet ? "16px" : "8px")};
	}
`;

export const AvatarTitle = styled.h3`
	width: 81px;

	font-size: 14px;
	font-weight: 500;

	color: #111;
	@media screen and (min-width: 768px) {
		font-size: 20px;
		width: ${(props) => (props.isYourPet ? "114px" : "200px")};
	}
`;

export const PhotoContainer = styled.div`
	position: relative;
	width: 112px;
	height: 112px;
	border-radius: 20px;
	overflow: hidden;
	@media screen and (min-width: 768px) {
		width: 182px;
		height: 182px;
		border-radius: 40px;
	}
`;

export const LoadedImage = styled.img`
	object-fit: cover;
	width: 100%;
	height: 100%;
`;

export const PlaceholderImage = styled.div`
	background-color: ${(props) => props.theme.colors.blueLight};
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
`;

export const PlaceholderIcon = styled.svg`
	width: 30px;
	height: 30px;
	stroke: ${(props) => props.theme.colors.primary};

	@media screen and (min-width: 768px) {
		width: 48px;
		height: 48px;
	}
`;

export const PlaceholderField = styled(Field)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	opacity: 0;
	cursor: pointer;
`;

export const FiledsContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;

	@media ${(props) => props.theme.media.tablet} {
		width: 395px;
		gap: 24px;
	}
`;

export const TextAreaInput = styled(Field)`
	margin-top: 4px;
	width: 100%;
	height: 92px;

	@media screen and (min-width: 768px) {
		height: ${(props) => props.height};
	}
`;

export const Textarea = styled.textarea`
	padding: 8px 16px;
	text-align: top;
	height: 92px;
	resize: none;

	border: 1px solid ${(props) => props.theme.colors.primary};
	border-radius: 20px;

	font-family: ${(props) => props.theme.fonts.main};
	font-size: 14px;
	line-height: 1.5;
	letter-spacing: 0.56px;

	@media screen and (min-width: 768px) {
		font-size: 16px;
	}
`;
