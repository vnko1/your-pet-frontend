import { useState } from "react";
import logoutSvg from "../../../assets/icons/logout.svg";
import crossSvg from "../../../assets/icons/cross-small.svg";
import {
  StyledLogout,
  StyledLogoutText,
  StyledLogoutIcon,
  DialogCloseBtn,
  LogoutDialogWrap,
  LogoutDialogText,
  LogoutDialogButtonWrap,
  LogoutDialogButton,
  LogoutDialogButtonText,
} from "./Logout.styled";
import Modal from "../../modals/modalPort/Modal";

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <StyledLogout onClick={() => setIsModalOpen(true)}>
        <StyledLogoutText>Log out</StyledLogoutText>
        <StyledLogoutIcon src={logoutSvg} alt="logout button" />
      </StyledLogout>

      {isModalOpen && (
        <Modal toggleModal={() => setIsModalOpen(false)}>
          <LogoutDialogWrap>
            <DialogCloseBtn
              src={crossSvg}
              alt="close logout dialog"
              onClick={() => setIsModalOpen(false)}
            />
            <LogoutDialogText>Already leaving?</LogoutDialogText>

            <LogoutDialogButtonWrap>
              <LogoutDialogButton
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <LogoutDialogButtonText>Cancel</LogoutDialogButtonText>
              </LogoutDialogButton>

              <LogoutDialogButton type="button">
                <LogoutDialogButtonText>Yes</LogoutDialogButtonText>
              </LogoutDialogButton>
            </LogoutDialogButtonWrap>
          </LogoutDialogWrap>
        </Modal>
      )}
    </>
  );
};

export default Logout;
