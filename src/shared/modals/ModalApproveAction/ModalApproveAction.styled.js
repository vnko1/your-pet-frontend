import styled from "styled-components";

export const ModalWrap = styled.div`
  position: relative;
  min-width: 280px;
  padding: 60px 0;
  margin: 0 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  @media (min-width: 768px) {
    padding: 60px 105px 60px 110px;
    border-radius: 40px;
    width: 608px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0 40px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const Text = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  margin: 14px 20px 44px 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const ButtonlWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 12px);
  gap: 8px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 17px;
  }
`;

export const Button = styled.button`
  padding: 8px 20px;
  border: 2px solid #54adff;
  border-radius: 40px;
  background-color: inherit;
  font-size: 16px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  width: 24px;
  height: 24px;

  background-color: inherit;
  cursor: pointer;

  &:after {
    content: "close SVG";
  }
`;
