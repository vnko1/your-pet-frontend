import styled from "styled-components";

export const InputSmall = styled.input`
  display: inline-block;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  width: 100%;
  height: 100%;

  font-size: 14px;
  border: ${(props) => props.theme.borders.none};
  outline: none;
  padding: 10px 20px;
  letter-spacing: 0.56px;
  color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.secondary};
  font: inherit;
`;

export const SearchContainer = styled.form`
  width: 100%;

  display: inline-flex;
  align-items: center;
  border-radius: 40px;
  box-shadow: ${(props) => props.theme.shadow.normal};
  font-size: 14px;
  border: ${(props) => props.theme.borders.none};
  outline: none;
  height: 44px;
  letter-spacing: 0.56px;
  color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.secondary};
  margin-bottom: 24px;
  font: inherit;

  @media ${(props) => props.theme.media.tablet} {
    width: 608px;
    font-size: 20px;
    margin-bottom: 40px;
  }

  @media ${(props) => props.theme.media.desktop} {
    margin-bottom: 60px;
  }
`;

export const SearchIcon = styled.svg`
  height: 24px;
  width: 24px;
  fill: ${(props) => props.theme.colors.primary};
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  height: 100%;

  padding: 10px 12px;
  border: ${(props) => props.theme.borders.none};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${(props) => props.theme.colors.white};
  @media ${(props) => props.theme.media.tablet} {
    padding: 10px 20px;
  }
`;
