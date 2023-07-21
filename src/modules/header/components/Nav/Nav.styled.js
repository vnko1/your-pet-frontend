import styled from "styled-components";

const CommonNavLink = styled.a`
  font-size: 32px;
  line-height: 1.37;
  color: #111111;

  @media (min-width: 728px) {
    font-size: 48px;
  }

  @media (min-width: 1280px) {
    font-size: 20px;
  }
`;

export default CommonNavLink;