import { useState } from "react";
import { useSelector } from "react-redux";
import { UserPageBody } from "./UserPage.styled";

import authSelectors from "../../redux/auth/auth-selectors";

import UserData from "../../modules/user/components/UserData/UserData";
import PetsData from "../../modules/user/components/PetsData/PetsData";
import { ModalCongrats } from "../../modules/user/components/ModalCongrats/ ModalCongrats";

const UserPage = () => {
  const [modal, setModal] = useState(false);
  const time = useSelector(authSelectors.selectUser);

  return (
    <UserPageBody>
      <UserData />
      <PetsData />
      {modal && <ModalCongrats />}
    </UserPageBody>
  );
};
export default UserPage;
