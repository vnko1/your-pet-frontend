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
`;

export const FilterAndAddPetBtnWrap = styled.div`
  display: flex;
  @media (min-width: 768px) {
    gap: 12px;
  }

  @media (min-width: 1280px) {
    gap: 16px;
  }
  /* flex-wrap: wrap; */
  /* gap: 12px;
  margin-bottom: 24px; */
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
