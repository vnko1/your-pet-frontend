import styled from "styled-components";
// import { Link } from "react-router-dom";

export const StyledLogout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 135px;
  background-color: #54adff;
  color: #fef9f9;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  :hover {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
  }
`;

export const StyledLogoutText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  margin: 0;
`;

export const StyledLogoutIcon = styled.img`
  width: 24px;
  height: 24px;
`;

// export const LogoutIcon = styled.svg.attrs({
//   xmlns: "http://www.w3.org/2000/svg",
// })``;
