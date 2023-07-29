import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding-top: 60px;
    background-blend-mode: multiply;
    background-position: center;
    background-size: cover;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 60px;
    display: flex;
  }
`;
export const Wrapper = styled.div`
  &img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  margin-bottom: 60px;
  @media screen and (min-width: 768px) {
    margin-bottom: 70px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 18px;
  }
`;
export const LinkBtn = styled(Link)`
  border: ${(props) => props.theme.borders.medium};
  border-color: transparent;

  border-radius: 40px;
  padding: 8px 51px;
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
export const Title = styled.h2`
  max-width: 280px;
  margin-bottom: 80px;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.3; /* 41.6px */
    max-width: 460px;
    & br {
      display: none;
    }
  }
`;
