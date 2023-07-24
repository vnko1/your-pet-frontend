import styled from "styled-components";

export const CardList = styled.ul`
  display: flex;
  gap: 24px 32px;
  margin: 0 auto;

  @media (max-width: 767px) {
    align-items: center;
    flex-direction: column;
    width: 280px;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    width: 704px;
  }

  @media (min-width: 1280px) {
    flex-wrap: wrap;
    width: 1248px;
  }

  /* gap: 24px 32px; */
  /* width: 280px; */
`;
