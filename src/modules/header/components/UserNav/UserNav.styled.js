import styled from "styled-components";

export const StyledUserNav = styled.div`

  @media (min-width: 1280px) {
    display: flex;
    gap: 24px;
    margin-left: 59px;
  }
`;

export const StyledLogout = styled.div`
  position: absolute;
  bottom: 20px;

  @media (max-width: 767px) {
    left: 20px;
  }

  @media (min-width: 768px) {
    top: 26px;
    right: 80px;
  }

  @media (min-width: 1280px) {
    position: static;
  }
`;