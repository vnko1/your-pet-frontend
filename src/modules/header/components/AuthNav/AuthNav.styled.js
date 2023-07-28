import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAuthNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  // @media (min-width: 768px) and (max-width: 1279px) {
  //   position: absolute;
  // }
`;

export const StyledAuthNavItem = styled.li`
  @media (max-width: 767px) {
    display: flex;
  }
`;

export const StyledLoginIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: #fef9f9;
`;

export const StyledAuthNavButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  // max-width: 300px;
  @media (max-width: 767px) {
    min-width: 165px;
    margin-left: auto;
    margin-right: auto;
  }

  font-size: 16px;
  line-height: 1.37;
  font-weight: ${(props) => (props.$primary ? "700" : "600")};
  text-decoration: none;

  background-color: ${(props) => (props.$primary ? "#FFC107" : "#FEF9F9")};
  color: ${(props) => (props.$primary ? "#FEF9F9" : "#FFC107")};
  border-radius: 40px;
  border: 2px solid #ffc107;
  padding-top: 8px;
  padding-right: ${(props) => (props.$primary ? "41px" : "20px")};
  padding-bottom: 8px;
  padding-left: ${(props) => (props.$primary ? "41px" : "20px")};

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${(props) => (props.$primary ? "#FEF9F9" : "#FFC107")};
    color: ${(props) => (props.$primary ? "#FFC107" : "#FEF9F9")};
    border: 2px solid #ffc107;
    cursor: pointer;
    ${StyledLoginIcon} {
      fill: #ffc107;
    }
  }
`;

// export const StyledAuthNavMobileMenuTalet = styled.div`
//   @media (min-width: 768px) and (max-width: 1279px) {
//     // position: absolute;
//     top: 0;
//     left: 0;
//   }
// `;
