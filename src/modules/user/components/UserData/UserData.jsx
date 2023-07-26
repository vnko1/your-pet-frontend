import UserForm from "../UserForm/UserForm";

import { UserDataBody, UserDataContent, UserDataHead } from "./UserData.styled";

const UserData = () => {
  return (
    <UserDataBody>
      <UserDataHead>My information:</UserDataHead>
      <UserDataContent>
        <UserForm />
      </UserDataContent>
    </UserDataBody>
  );
};

export default UserData;
