import styled from "styled-components";

export const NoticesNavMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  @media (max-width: 767px) {
    position: relative;
    width: 280px;
  }

  @media (min-width: 768px) {
    gap: 92px;
    width: 704px;
    margin-bottom: 40px;
  }

  @media (min-width: 1280px) {
    align-items: center;
    gap: 403px;
    width: 1248px;
    margin-bottom: 42px;
  }
`;

export const NoticesNavWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  /* width: 100%; */

  @media (max-width: 767px) {
    width: 205px;
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

export const Button = styled.button`
  display: flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;

  border-radius: 40px;
  border-color: transparent;
  color: #54adff;
  background: #cce4fb;

  &:hover,
  &:focus {
    color: #fef9f9;
    background: #54adff;
  }
`;
