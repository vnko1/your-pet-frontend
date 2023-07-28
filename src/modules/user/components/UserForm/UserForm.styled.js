import styled from "styled-components";

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

export const UserFormBody = styled.div`
  padding-right: 0;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    flex: 1 1 auto;
  }
`;

export const UserFormItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const UserFormLabel = styled.label`
  font-weight: 500;
  font-size: 16px;
  line-height: 1, 112;
  flex: 0 0 85px;

  @media screen and (min-width: 320px) {
    font-size: 14px;
    flex: 0 0 60px;
  }
`;

export const UserFormInput = styled.input`
  height: 28px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  padding: 6px 32px 6px 12px;
  color: inherit;
  outline: 1px solid #54adff;
  border: none;
  border-radius: 20px;

  width: 190px;

  @media screen and (min-width: 768px) {
    width: 255px;
  }
`;

export const UserFormBtn = styled.button`
  background: white;
  color: rgba(136, 136, 136, 1);
  border: none;
  display: flex;
  align-items: center;
  font-size: 18px;
`;

export const Btn = styled.button`
  width: 255px;
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

  @media screen and (min-width: 768px) {
    width: 100%;
    margin: 0, auto;
  }
`;
