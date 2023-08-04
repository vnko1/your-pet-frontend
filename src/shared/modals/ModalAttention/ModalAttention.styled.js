import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalWrap = styled.div`
  position: relative;
  width: 280px;
  height: 445px;
  padding: 60px 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  background-color: ${({ theme: { colors } }) => colors.white};

  @media (${({ theme: { media } }) => media.tablet}) {
    padding: 60px 40px;
    border-radius: 40px;
    width: 608px;
    height: 429px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  text-align: center;
  margin-bottom: 20px;

  @media (${({ theme: { media } }) => media.tablet}) {
    font-size: 36px;
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.medium};
  text-align: center;
  margin-bottom: 40px;

    @media (${({ theme: { media } }) => media.tablet}) {
      font-size: 20px;
      margin-bottom: 40px;
    }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;

  @media (${({ theme: { media } }) => media.tablet}) {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 24px;
  height: 24px;

  cursor: pointer;

  * {
    stroke: ${({ theme: { colors } }) => colors.primary};
  }

  @media (${({ theme: { media } }) => media.tablet}) {
    top: 24px;
    right: 24px;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const StyledLoginIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: ${(props) => props.theme.colors.background};
`;

export const StyledAuthNavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 240px;

  font-size: 16px;
  line-height: 1.37;
  font-weight: ${(props) => (props.$primary ? "700" : "600")};
  text-decoration: none;

  background-color: ${(props) => (props.$primary ? "#FFC107" : "#FEF9F9")};
  color: ${(props) => (props.$primary ? "#FEF9F9" : "#FFC107")};
  border-radius: 40px;
  border: 2px solid #ffc107;
  padding-top: 8px;
  padding-bottom: 8px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: ${(props) => (props.$primary ? "#FEF9F9" : "#FFC107")};
    color: ${(props) => (props.$primary ? "#FFC107" : "#FEF9F9")};
    border: 2px solid #ffc107;
    cursor: pointer;
    ${StyledLoginIcon} {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }

  @media (${({ theme: { media } }) => media.tablet}) {
    width: ${(props) => (props.$primary ? "165px" : "142px")};
  }
`;