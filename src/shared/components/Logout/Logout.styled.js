import styled from "styled-components";

export const StyledLogout = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 135px;
  height: 40px;
  // background-color: #54adff;
  background: linear-gradient(90deg, #54adff, #54adff);
  color: #fef9f9;
  border-radius: 40px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background: linear-gradient(90deg, #9bd0ff, #419ef1);
    cursor: pointer;
  }
`;

export const StyledLogoutText = styled.p`
  font-size: 16px;
  line-height: 1.37;
`;

export const StyledLogoutIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const DialogCloseBtn = styled.svg`
  display: block;
  width: 24px;
  height: 24px;
  margin-left: auto;
  path {
    stroke: #54adff;
  }
`;

export const LogoutDialogWrap = styled.div`
  width: 280px;
  height: 302px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 12px;
  text-align: center;

  @media (min-width: 768px) {
    width: 608px;
    height: 354px;
    border-radius: 40px;
    padding: 24px;
  }
`;

export const LogoutDialogText = styled.p`
  font-size: 24px;
  line-height: 1.37;
  color: #111111;
  margin-top: 41px;
  margin-bottom: 44px;

  @media (min-width: 768px) {
    font-size: 36px;
    margin-top: 60px;
    margin-bottom: 48px;
  }
`;

export const LogoutDialogButtonWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    gap: 17px;
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
  margin-bottom: 8px;

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