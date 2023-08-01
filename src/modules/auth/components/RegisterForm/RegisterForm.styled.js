import styled from "styled-components";
import { Form, Field } from "formik";
import { Error } from "./../../../../schemas/formValid.styled";
import { ReactComponent as CloseSvg } from "./../../../../assets/icons/cross-small.svg";
import { ReactComponent as CheckSvg } from "./../../../../assets/icons/check.svg";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;

  position: relative;
  width: 280px;
  height: 480px;
  background-color: #fff;
  box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  border-radius: 25px;

  @media (min-width: 768px) {
    width: 600px;
    height: 615px;
    border-radius: 50px;
  }
`;

export const RegisterHeader = styled.h1`
  margin-top: 60px;
  font-size: 24px;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
    margin-top: 0;
  }
`;

export const InputWrapper = styled.div`
  max-width: 100%;
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 460px;
    padding-bottom: 15px;
  }
`;

export const Input = styled(Field)`
  position: relative;
  padding: 12px 70px 12px 12px;
  width: 100%;
  margin-bottom: 32px;

  font-size: 16px;
  color: #888888;

  background-color: #fff;
  border: 1px solid #54adff;
  border-radius: 25px;

  transition: all 300ms ease-in-out;

  outline: none;

  &.default {
    border-color: #54adff;
  }
  &.success {
    border-color: #00c3ad;
  }
  &.error {
    border-color: #f43f5e;
  }

  @media (min-width: 768px) {
    border-radius: 25px;
    font-size: 16px;
  }
`;

export const Btn = styled.button`
  width: 256px;
  height: 50px;
  padding: 16px 32px;
  z-index: 10;
  margin-bottom: 16px;

  font-weight: 500;
  font-size: 20px;
  font-family: Manrope, sans-serif;
  color: #fff;
  background-color: #54adff;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;

  transition: all 250ms ease-in-out;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 460px;
    border-radius: 25px;
    font-size: 16px;
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
    text-decoration: underline;
  }
`;

export const PassWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const ErrorText = styled(Error)`
  top: 44px;
`;

export const ShowPassBtn = styled.button`
  position: absolute;
  top: 30%;
  right: 15px;

  transform: translateY(-50%);

  padding: 5px;
  width: 33px;
  height: 33px;

  background-color: transparent;
  outline: none;
  border: none;

  cursor: pointer;
`;

export const IconHidden = styled.svg`
  width: 24px;
  height: 24px;
`;

export const IconShown = styled.svg`
  width: 24px;
  height: 24px;
`;

export const WrapperCheckCross = styled.div`
  position: absolute;
  top: 16%;
  right: 15px;
  width: 24px;
  height: 24px;
  z-index: 1000;
  &:active {
    .btnShowHidden {
      right: 12px;
    }
  }
`;

export const IconCross = styled(CloseSvg)`
  width: 100%;
  height: 100%;
  stroke: #f43f5e;
`;

export const IconCheck = styled(CheckSvg)`
  width: 100%;
  height: 100%;
  * {
    stroke: #00c3ad;
  }
`;
