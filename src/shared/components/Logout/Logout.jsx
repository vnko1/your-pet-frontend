import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetNotices } from "../../../redux/notices/notices-operations";
import spriteSvg from "../../../assets/icons.svg";
import { StyledLogout, StyledLogoutText, LogoutIcon } from "./Logout.styled";
import ModalLogOut from "../../modals/ModalLogout/ModalLogOut";

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(resetNotices());
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StyledLogout onClick={toggleModal}>
        <StyledLogoutText>Log out</StyledLogoutText>
        <LogoutIcon>
          <use href={spriteSvg + "#logout"} />
        </LogoutIcon>
      </StyledLogout>

      {isModalOpen && <ModalLogOut toggleModal={toggleModal} />}
    </>
  );
};

export default Logout;
