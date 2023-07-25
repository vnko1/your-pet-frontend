import { Link } from "react-router-dom";
import styled from "styled-components";

export const NoticesNavMainContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 767px) {
    position: relative;
    width: 280px;
  }

  @media (min-width: 768px) {
    gap: 92px;
    width: 704px;
  }

  @media (min-width: 1280px) {
    gap: 403px;
    width: 1248px;
  }
`;

export const NoticesNavWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 24px;
  width: 100%;

  @media (max-width: 767px) {
    width: 205px;
  }

  @media (max-width: 1279px) {
    max-width: 320px;
  }
`;

export const FilterAndAddPetBtnWrap = styled.div`
  display: flex;
  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1280px) {
    gap: 16px;
  }
`;

export const LinkButton = styled(Link)`
  display: flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  border-color: transparent;
  /* color: #54adff;
  background: #cce4fb; */
  text-decoration: none;

  color: ${(props) => (props.active === props.to ? "#fef9f9" : "#54adff")};
  background: ${(props) => (props.active === props.to ? "#54adff" : "#cce4fb")};

  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  /* &:hover,
  &:focus {
    color: ${(props) => (props.pathname === props.to ? "#fef9f9" : "#54adff")};
    color: #fef9f9;
    background: #54adff;
  } */
`;
