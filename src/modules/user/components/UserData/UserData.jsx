import UserForm from "../UserForm/UserForm";

import {
  UserPage,
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
    <UserPage>
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
    </UserPage>
  );
};

export default UserData;
