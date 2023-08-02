import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { UserPageBody } from "./UserPage.styled";

import UserData from "../../modules/user/components/UserData/UserData";
import PetsData from "../../modules/user/components/PetsData/PetsData";
import { ModalCongrats } from "../../modules/user/components/ModalCongrats/ ModalCongrats";

import authSelectors from "../../redux/auth/auth-selectors";

const UserPage = () => {
  const [modal, setModal] = useState(false);
  const user = useSelector(authSelectors.selectUser);

  // useEffect(() => {
  //   if (user.isNewUser === "true") {
  //     setModal(true);
  //   }
  // }, [user.isNewUser]);

  useEffect(() => {
    const createdAt = new Date(user.createdAt);
    const updatedAt = new Date();

    const interval = updatedAt - createdAt;
    if (interval < 6000) {
      setModal(true);
    }
  }, [user.createdAt, user.updatedAt]);

  return (
    <UserPageBody>
      {modal && <ModalCongrats />}
      <UserData />
      <PetsData />
    </UserPageBody>
  );
};
export default UserPage;
