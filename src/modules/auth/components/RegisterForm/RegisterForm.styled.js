import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  position: relative;
  width: 280px;
  height: 425px;
  background-color: #fff;
  box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  border-radius: 25px;

  @media (min-width: 1280px) {
    width: 600px;
    height: 615px;
    border-radius: 50px;
  }

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

  @media (min-width: 1280px) {
    font-size: 36px;
  }

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const InputWrapper = styled.div`
  max-width: 100%;
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    width: 460px;
    padding-bottom: 15px;
    margin-bottom: 60px;
  }

  @media (min-width: 768px) {
    width: 460px;
    padding-bottom: 15px;
    margin-bottom: 60px;
  }
`;

export const Input = styled(Field)`
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 55px;
  width: 100%;
  margin-bottom: 32px;

  font-size: 16px;
  color: #888888;

  background-color: #fff;
  border: 1px solid #54adff;
  border-radius: 25px;

  transition: all 300ms ease-in-out;

  outline: none;

  &:last-child {
    margin-bottom: 0;
  }

  &.default {
    border-color: #54adff;
  }
  &.success {
    border-color: #00c3ad;
  }
  &.error {
    border-color: #f43f5e;
  }

  @media (min-width: 1280px) {
    border-radius: 25px;
    font-size: 16px;
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
  // margin-top: 170px;

  font-weight: 500;
  font-size: 20px;
  font-family: Manrope, sans-serif;
  color: #fff;
  background-color: #54adff;

  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;

  transition: all 250ms ease-in-out;

  cursor: pointer;

  @media (min-width: 1280px) {
    width: 460px;
    border-radius: 25px;
    font-size: 16px;
    // margin-top: 100px;
  }

  @media (min-width: 768px) {
    width: 460px;
    border-radius: 25px;
    font-size: 16px;
    // margin-top: 100px;
  }
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
  &:first-child {
    margin-bottom: 32px;
  }
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
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 7px;

  transition: border 250ms ease-in-out;

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

export const WrapperCheckCross = styled.img`
  position: absolute;
  top: 50%;
  right: 15px;
  width: 24px;
  height: 24px;
`;

export const IconCross = styled.svg`
  width: 100%;
  height: 100%;
`;

export const IconCheck = styled.svg`
  width: 100%;
  height: 100%;
`;
