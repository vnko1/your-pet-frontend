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
    display: flex;
    padding-top: 20px;
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
    max-width: 450px;
    & br {
      display: none;
    }
  }
`;
