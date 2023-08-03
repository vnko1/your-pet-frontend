import styled from "styled-components";
export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
  }
`;
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  cursor: pointer;

  @media ${(props) => props.theme.media.tablet} {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  gap: 20px;
  padding-bottom: 75px;
  @media screen and (min-width: 768px) {
    gap: 32px;
    margin-top: 40px;
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding-bottom: 172px;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
    margin-top: 60px;
    padding-bottom: 69px;
  }
`;
