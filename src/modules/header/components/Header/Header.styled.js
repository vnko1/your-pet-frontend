import styled from "styled-components";

export const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
`;

export const BurgerMenuBtn = styled.img`
    width: 24px;
    height: 24px;

  @media (min-width: 1280px) {
    display: none;
  }
`;

export const MobileMenuCloseBtn = styled.img`
  width: 24px;
  height: 24px;
`;

export const MobileMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background-color: #fef9f9;

  z-index: 2;
`;

export const MenuWrap = styled.div`
display: flex;
justify-content: space-between;
`;