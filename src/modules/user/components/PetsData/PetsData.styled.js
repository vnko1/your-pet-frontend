import styled from "styled-components";

export const UserPetsBody = styled.div`
  flex: 1 1 65%;
`;

export const UserPetsHead = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.35;
  margin-bottom: 18px;
  color: #000000;

  @media (${(props) => props.theme.media.tablet}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const NoUserPets = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 20px;
  text-align: center;

  @media (${(props) => props.theme.media.tablet}) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;
