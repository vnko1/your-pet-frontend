import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  @media ${(props) => props.theme.media.phone} {
    padding: 20px;
  }

  @media ${(props) => props.theme.media.tablet} {
    width: 768px;
    padding: 24px 32px;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 1280px;
    padding: 20px 16px;
  }
`;
