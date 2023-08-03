import styled from "styled-components";
export const CardItem = styled.li`
  width: 280px;
  border-radius: 40px;
  background: #fff;
  transition: transform 0.3s ease;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding-top: 16px;
  padding-left: 12px;
  padding-bottom: 16px;
  padding-right: 12px;
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
  @media screen and (min-width: 768px) {
    width: 336px;
    height: 275px;
  }
  @media screen and (min-width: 1280px) {
    width: 394px;
    height: 287px;
  }
`;
export const CardLink = styled.a`
  height: 50px;
  color: #54adff;
  display: inline-block;
  width: 100%;
  text-align: center;
  vertical-align: top;
  font-size: 20px;
  font-weight: 700;
  transition: transform 0.3s ease;
  margin-bottom: 16px;
  &:hover,
  &:focus {
    transform: scale(1.01);
  }
`;
export const CardBox = styled.div`
  display: flex;
`;
export const ImageBox = styled.div`
  max-width: 74px;

  display: block;
  margin-right: 12px;
  @media screen and (min-width: 768px) {
    max-width: 124px;
    margin-right: 20px;
  }
`;
export const ContentBox = styled.div`
  font-size: 12px;
`;
export const TimeItem = styled.li`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Text = styled.p`
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  &:active,
  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;
