import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const CommonNavLink = styled(NavLink)`
  font-size: 32px;
  line-height: 1.37;
  font-weight: 500;
  color: #111111;
  text-decoration: none;
  &.active {
    color: #ffc107;
    font-weight: 700;
  }

  @media (min-width: 728px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0;
  // margin: 0;
  margin-top: ${(props) => props.marginBottom};

  @media (min-width: 768px) {
    margin-top: 92px;
  }

  @media (min-width: 1280px) {
    display: flex;
    gap: 38px;
    margin: 0;

  }
`;

export const StyledNavItem = styled.li`
  padding: 0;
  margin-bottom: 20px;

  @media (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    margin-bottom: 0;
  }
`;