import { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { logOut } from "../../../redux/auth/auth-operations";
import spriteSvg from "../../../assets/icons.svg";
import {
  StyledLogout,
  StyledLogoutText,
  DialogCloseBtn,
  LogoutDialogWrap,
  LogoutDialogText,
  LogoutDialogButtonWrap,
  LogoutDialogButton,
  LogoutDialogButtonText,
  LogoutIcon,
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
        <LogoutIcon>
          <use href={spriteSvg + "#logout"} />
        </LogoutIcon>
      </StyledLogout>

      {isModalOpen && (
        <Modal toggleModal={() => setIsModalOpen(false)}>
          <LogoutDialogWrap>
            <DialogCloseBtn onClick={() => setIsModalOpen(false)}>
              <use href={spriteSvg + "#cross"} />
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
                <LogoutIcon>
                  <use href={spriteSvg + "#logout"} />
                </LogoutIcon>
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
