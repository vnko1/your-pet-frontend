import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
// import {
//   colors,
//   fonts,
//   fontWeights,
//   shadow,
//   borders,
//   media,
// } from "styles/theme";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  position: relative;
  width: 600px;
  height: 620px;
  background-color: #fff;
  box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  border-radius: 50px;
`;

export const RegisterHeader = styled.h1`
  font-size: 36px;
  font-family: Manrope, sans-serif;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;

  margin-bottom: 40px;
  max-width: 100%;
  width: 460px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const Input = styled(Field)`
  padding: 15px;
  width: 100%;

  font-size: 16px;
  color: #888888;

  background-color: #fff;
  border: 1px solid #54adff;
  border-radius: 25px;

  transition: all 300ms ease-in-out;

  outline: none;

  &:not(:placeholder-shown)[data-error="false"] {
    border: 1px solid #f43f5e;
    background-image: url("./../../../../assets/icons.svg#cross-small");
  }

  &[data-error="true"] {
    border: 1px solid #00c3ad;
    background-image: url("./../../../../assets/icons.svg#check");
  }
`;

export const Btn = styled.button`
  width: 460px;
  height: 50px;
  padding: 16px 32px;
  z-index: 10;

  font-weight: 500;
  font-size: 20px;
  font-family: Manrope, sans-serif;
  color: #fff;
  background-color: #54adff;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;

  transition: all 250ms ease-in-out;

  cursor: pointer;
`;

export const ErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: -10%;
  left: 15px;

  transform: translateY(100%);

  font-size: 14px;
  color: #f43f5e;
  font-family: Manrope, sans-serif;

  &:not(:placeholder-shown)[data-error="false"] {
    color: #f43f5e;
  }

  &[data-error="true"] {
    color: #00c3ad;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;

  font-family: Manrope, sans-serif;
  font-size: 14px;
  color: #888888;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);

  a {
    color: #54adff;
  }
`;

export const PassWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 15px;

  transform: translateY(-50%);

  padding: 5px;
  width: 33px;
  height: 33px;

  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  transition: border 250ms ease-in-out;

  cursor: pointer;
`;

export const IconHidden = styled.img`
  width: 100%;
  height: 100%;

  transition: fill 250ms ease-in-out;
`;

export const IconShown = styled.img`
  width: 100%;
  height: 100%;

  transition: fill 250ms ease-in-out;
`;
