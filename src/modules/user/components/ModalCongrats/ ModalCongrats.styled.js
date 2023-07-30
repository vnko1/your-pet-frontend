import styled from "styled-components";

export const BtnClose = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  width: 24px;
  height: 24px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    right: 24px;
    top: 24px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  text-align: center;

  font-family: Manrope;
  font-weight: 500;
  font-size: 36px;
  line-height: 33px;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 1);

  @media screen and (min-width: 768px) {
    margin-bottom: 52px;
    font-size: 36px;
    line-height: 49px;
  }
`;

export const Text = styled.p`
  margin-bottom: 40px;
  text-align: center;

  font-family: Manrope;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: rgba(17, 17, 17, 1);
  white-space: nowrap;

  @media screen and (min-width: 768px) {
    margin-bottom: 60px;
    font-size: 24px;
    line-height: 33px;
  }
`;

export const BtnCongrats = styled.button`
  width: 100%;
  height: 40px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  background: rgba(84, 173, 255, 1);
  border-radius: 40px;
  border: none;

  font-family: Manrope;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.04em;

  color: rgba(254, 249, 249, 1);

  @media screen and (min-width: 768px) {
    width: 248px;
  }
`;
