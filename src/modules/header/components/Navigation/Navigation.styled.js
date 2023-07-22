import styled from "styled-components";

export const NavWrap = styled.div`
display: block;
margin-left: auto;
margin-right: auto;

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 270px;
  }
`;