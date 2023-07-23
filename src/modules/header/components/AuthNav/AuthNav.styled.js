import styled from "styled-components";
// import { Link } from "react-router-dom";

export const StyledAuthNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const StyledAuthNavItem = styled.li`
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledLoginIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const StyledAuthNavButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 165px;

  font-size: 16px;
  line-height: 1.37;

  background-color: ${(props) => (props.$primary ? "#FFC107" : "#FEF9F9")};
  color: ${(props) => (props.$primary ? "#FEF9F9" : "#FFC107")};
  border-radius: 40px;
  border: 2px solid #ffc107;
  padding-top: 8px;
  padding-bottom: 8px;
  :hover {
    background-color: ${(props) => (props.$primary ? "#FEF9F9" : "#FFC107")};
    color: ${(props) => (props.$primary ? "#FFC107" : "#FEF9F9")};
    border: 2px solid #ffc107;
    cursor: pointer;
    ${StyledLoginIcon} {
      g {
        fill: #ffc107;
      }
    }
  }
`;