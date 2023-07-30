import styled from "styled-components";

export const StyledUserNav = styled.div`

  @media (min-width: 1280px) {
    display: flex;
    gap: 24px;
  }
`;

export const StyledLogout = styled.div`
  position: absolute;
  bottom: 0;

  @media (max-width: 767px) {
    left: 0;
  }

  @media (min-width: 768px) {
    position: static;
  }

  @media (min-width: 1280px) {
    position: static;
  }
`;