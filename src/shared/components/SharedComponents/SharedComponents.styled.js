import styled from "styled-components";

export const LearnMoreWideWhiteBtn = styled.button`
  border: ${(props) => props.theme.borders.medium};
  border-radius: 40px;
  padding: 8px 78px;
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.primary};
  display: flex;

  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  &:active,
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.white};
    border-color: transparent;

    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }
`;

export const PawIcon = styled.svg`
  height: 24px;
  width: 24px;
  fill: ${(props) => props.theme.colors.white};
`;

export const PawBlueIcon = styled.svg`
  height: 24px;
  width: 24px;
  fill: ${(props) => props.theme.colors.primary};
`;

export const LearnMoreWideBlueBtn = styled.button`
  border: ${(props) => props.theme.borders.medium};
  border-color: transparent;

  border-radius: 40px;
  padding: 8px 60px;
  gap: 12px;
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  &:active,
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.white};

    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }
`;

export const LearnMoreSmallBlueBtn = styled.button`
  border: ${(props) => props.theme.borders.medium};
  border-radius: 40px;
  padding: 9px 20px;
  gap: 8px;
  font-size: 16px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  border-color: transparent;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  &:active,
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.white};

    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }
`;

export const LearnMoreSmallWhiteBtn = styled.button`
  border: ${(props) => props.theme.borders.medium};
  border-radius: 40px;
  padding: 9px 20px;
  font-size: 16px;
  gap: 8px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  &:active,
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.white};
    border-color: transparent;

    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }
  &:active > svg,
  &:focus > svg,
  &:hover > svg {
    fill: ${(props) => props.theme.colors.white};
  }
`;

export const FilterBtn = styled.button`
  border: ${(props) => props.theme.borders.medium};
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: 40px;
  padding: 8px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) => props.theme.colors.primary};

  &:active,
  &:focus,
  &:hover {
    border: 2px solid;
    border-color: transparent;
    color: ${(props) => props.theme.colors.white};
    background: -webkit-linear-gradient(315deg, #9bd0ff 0%, #419ef1 100%);
  }

  &:active > svg,
  &:focus > svg,
  &:hover > svg {
    stroke: ${(props) => props.theme.colors.white};
  }
`;

export const FilterIcon = styled.svg`
  height: 24px;
  width: 24px;
  stroke: ${(props) => props.theme.colors.primary};
`;

export const LocationBtn = styled.button`
  border: ${(props) => props.theme.borders.none};
  border-radius: 40px;
  padding: 6px 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  background-color: ${(props) => props.theme.colors.blueLight};

  &:active,
  &:focus,
  &:hover,
  &:active > svg,
  &:focus > svg,
  &:hover > svg {
    stroke: ${(props) => props.theme.colors.white};

    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const LocationIcon = styled.svg`
  height: 24px;
  width: 24px;
  stroke: ${(props) => props.theme.colors.primary};
`;

export const TagsBtn = styled.button`
  border: ${(props) => props.theme.borders.none};
  border-radius: 40px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blueLight};
  &:active,
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

export const FavouriteBtn = styled.button`
  border: ${(props) => props.theme.borders.none};
  border-radius: 100%;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.blueLight};

  &:active > svg,
  &:focus > svg,
  &:hover > svg {
    fill: ${(props) => props.theme.colors.primary};
  }
`;

export const HeartIcon = styled.svg`
  height: 24px;
  width: 24px;
  stroke: ${(props) => props.theme.colors.primary};
`;

export const Input = styled.input`
  display: inline-block;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  font-size: 20px;
  border: ${(props) => props.theme.borders.none};
  outline: none;
  padding: 10px 20px;
  letter-spacing: 0.8px;
  color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const InputSmall = styled.input`
  display: inline-block;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  font-size: 14px;
  border: ${(props) => props.theme.borders.none};
  outline: none;
  padding: 10px 20px;
  letter-spacing: 0.56px;
  color: ${(props) => props.theme.colors.grey};
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export const SearchContainer = styled.form`
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
`;

export const SearchIcon = styled.svg`
  height: 24px;
  width: 24px;
  fill: ${(props) => props.theme.colors.primary};
`;

export const SearchBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 13px;
  border: ${(props) => props.theme.borders.none};
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background-color: ${(props) => props.theme.colors.white};
`;
