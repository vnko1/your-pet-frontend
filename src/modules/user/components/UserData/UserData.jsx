import UserForm from "../UserForm/UserForm";

import {
  UserPageItem,
  UserFormTitle,
  UserFormBox,
  UserBtnPen,
} from "./UserData.styled";
import { ReactComponent as CloseSvg } from "../../../../assets/icons/cross-small.svg";
import { ReactComponent as UpdateUserSvg } from "../../../../assets/icons/edit-2.svg";

import { useState } from "react";

const UserData = () => {
  const [isUserUpdate, setIsUserUpdate] = useState(true);

  return (
    <>
      <UserPageItem>
        <UserFormTitle>My information:</UserFormTitle>
        <UserFormBox>
          {isUserUpdate ? (
            <UserBtnPen onClick={() => setIsUserUpdate((state) => !state)}>
              <UpdateUserSvg />
            </UserBtnPen>
          ) : (
            <UserBtnPen onClick={() => setIsUserUpdate((state) => !state)}>
              <CloseSvg />
            </UserBtnPen>
          )}

          <UserForm
            isUserUpdate={isUserUpdate}
            setIsUserUpdate={setIsUserUpdate}
          />
        </UserFormBox>
      </UserPageItem>
    </>
  );
};

export default UserData;
