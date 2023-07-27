import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../../../redux/auth/auth-operations";
import logoutSvg from "../../../assets/icons/logout.svg";
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

const Logout = (props) => {
  const { onCloseMobileMenu } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const logoutUser = useDispatch();

  const onLogoutUser = () => {
    logoutUser(logOut());
    setIsModalOpen(false);
    onCloseMobileMenu();
  };

  return (
    <>
      <StyledLogout onClick={() => setIsModalOpen(true)}>
        <StyledLogoutText>Log out</StyledLogoutText>
        <StyledLogoutIcon src={logoutSvg} alt="logout button" />
      </StyledLogout>

      {isModalOpen && (
        <Modal toggleModal={() => setIsModalOpen(false)}>
          <LogoutDialogWrap>
            <DialogCloseBtn onClick={() => setIsModalOpen(false)}>
              <path
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 5 5 19M5 5l14 14"
              />
            </DialogCloseBtn>
            <LogoutDialogText>Already leaving?</LogoutDialogText>

            <LogoutDialogButtonWrap>
              <LogoutDialogButton
                type="button"
                onClick={() => setIsModalOpen(false)}
              >
                <LogoutDialogButtonText>Cancel</LogoutDialogButtonText>
              </LogoutDialogButton>

              <LogoutDialogButton $primary type="button" onClick={onLogoutUser}>
                <LogoutDialogButtonText $primary>Yes</LogoutDialogButtonText>
              </LogoutDialogButton>
            </LogoutDialogButtonWrap>
          </LogoutDialogWrap>
        </Modal>
      )}
    </>
  );
};

Logout.propTypes = {
  onCloseMobileMenu: PropTypes.func,
};

export default Logout;
