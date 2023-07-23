import styled from "styled-components";

export const CommonNavLink = styled.a`
  font-size: 32px;
  line-height: 1.37;
  color: #111111;
  text-decoration: none;

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

  @media (min-width: 1280px) {
    display: flex;
    gap: 40px;
  }
`;

export const StyledNavItem = styled.li`
margin: 0;
`;