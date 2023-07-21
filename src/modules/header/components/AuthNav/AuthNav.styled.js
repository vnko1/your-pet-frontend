import styled from "styled-components";
// import { Link } from "react-router-dom";

export const StyledAuthNav = styled.ul`
  list-style: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 20px;
  }
`;

export const StyledAuthNavItem = styled.li`
  margin-bottom: 12px;
`;

export const StyledLoginIcon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const StyledLogin = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 165px;
  background-color: #ffc107;
  color: #fef9f9;
  border-radius: 40px;
  border: 2px solid #ffc107;
  padding-top: 5px;
  padding-bottom: 5px;
  :hover {
    background-color: #fef9f9;
    color: #ffc107;
    border: 2px solid #ffc107;
    cursor: pointer;
    ${StyledLoginIcon} {
      g {
        fill: #ffc107;
      }
    }
  }
`;

export const StyledLoginText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin: 0;
`;

export const StyledRegister = styled.a`
  display: block;
  text-align: center;

  width: 165px;
  background-color: #fef9f9;
  color: #ffc107;
  border-radius: 40px;
  border: 2px solid #ffc107;
  padding-top: 8px;
  padding-bottom: 8px;
  :hover {
    background-color: #ffc107;
    color: #fef9f9;
    cursor: pointer;
  }
`;
