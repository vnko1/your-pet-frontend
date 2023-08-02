import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 117px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 80px 0 126px;
  }

  @media ${(props) => props.theme.media.desktop} {
    padding: 80px 0 452px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  cursor: pointer;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;
