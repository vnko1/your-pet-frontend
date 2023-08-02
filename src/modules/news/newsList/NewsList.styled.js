import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  gap: 24px;
  flex-direction: column;
  margin-bottom: 40px;

  @media ${(props) => props.theme.media.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 32px;
    margin-bottom: 60px;
  }
  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 68px;
  }
`;

export const EmptyError = styled.h2`
  font-size: 28px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  letter-spacing: -0.28px;
  text-align: center;
`;
