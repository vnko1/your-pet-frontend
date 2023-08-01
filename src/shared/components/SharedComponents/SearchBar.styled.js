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

export const SearchForm = styled.form`
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

// export const SearchIcon = styled.svg`
//   height: 24px;
//   width: 24px;
//   fill: ${(props) => props.theme.colors.primary};
// `;

// export const SearchBtn = styled.button`
//   display: flex;
//   align-items: center;
//   height: 100%;

//   padding: 10px 12px;
//   border: ${(props) => props.theme.borders.none};
//   border-top-right-radius: 40px;
//   border-bottom-right-radius: 40px;
//   background-color: ${(props) => props.theme.colors.white};
//   @media ${(props) => props.theme.media.tablet} {
//     padding: 10px 20px;
//   }
// `;

export const BtnsWrap = styled.div`
  height: 100%;
  border: ${(props) => props.theme.borders.none};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media ${(props) => props.theme.media.tablet} {
    padding: 10px 20px;
  }
`;

export const ResetBtn = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background-color: #fff;
  padding: 0;

  &:hover svg use,
  &:focus svg use {
    stroke: red;
    transform: scale(1.05);
  }
`;

export const SubmitBtn = styled.button`
  width: 24px;
  height: 24px;

  border: none;
  background-color: #fff;
  padding: 0;

  &:hover svg use,
  &:focus svg use {
    fill: #377ac8;
    transform: scale(1.05);
  }
`;
