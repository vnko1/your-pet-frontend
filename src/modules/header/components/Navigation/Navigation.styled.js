import styled from "styled-components";

export const NavWrap = styled.div`
display: block;
margin-left: auto;
margin-right: auto;

  @media (min-width: 1280px) {
    width: 929px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
  }
`;

export const W = styled.div`
  @media (min-width: 768px) and (max-width: 1279px) {
    position: absolute;
    top: -6px;
    right: 48px;
  }
`;