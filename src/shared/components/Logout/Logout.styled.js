import styled from "styled-components";
// import { Link } from "react-router-dom";

export const StyledLogout = styled.a`
  position: absolute;
  bottom: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 135px;
  height: 40px;
  background-color: #54adff;
  color: #fef9f9;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  :hover {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
    cursor: pointer;
  }

  @media (max-width: 767px) {
    left: 20px;
  }

  @media (min-width: 768px) {
    top: 26px;
    right: 80px;
  }

  @media (min-width: 1280px) {
    position: static;
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

export const DialogCloseBtn = styled.img`
  width: 24px;
  height: 24px;
`;

export const LogoutDialogWrap = styled.div`
  width: 280px;
  height: 302px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 608px;
    height: 354px;
  }
`;

export const LogoutDialogText = styled.p`
  font-size: 24px;
  line-height: 1.37;
  color: #111111;

  @media (min-width: 768px) {
    font-size: 36px;
  }
`;

export const LogoutDialogButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LogoutDialogButtonText = styled.p`
  font-size: 16px;
  line-height: 1.37;
  color: ${(props) => (props.$primary ? "#FFFFFF" : "#54adff")};
  margin: 0;
`;

export const LogoutDialogButton = styled.button`
  width: 256px;
  border: 2px solid #54adff;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: ${(props) => (props.$primary ? "#54adff" : "#FFFFFF")};
  cursor: pointer;

  :hover {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
    ${LogoutDialogButtonText} {
      color: #ffffff;
    }
  }

  @media (min-width: 768px) {
    width: 129px;
  }
`;




// export const LogoutIcon = styled.svg.attrs({
//   xmlns: "http://www.w3.org/2000/svg",
// })``;
