import styled from "styled-components";

export const UserPageBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${(props) => props.theme.media.desktop} {
    flex-direction: row;
    gap: 32px;
  }
`;
