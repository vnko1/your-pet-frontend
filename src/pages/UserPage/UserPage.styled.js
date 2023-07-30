import styled from "styled-components";

export const UserPageBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-top: 100px;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    align-items: flex-start;
    gap: 32px;
  }
`;
