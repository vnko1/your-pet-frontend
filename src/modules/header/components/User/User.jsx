import userSvg from "../../../../assets/icons/avatar.svg";
import { StyledUser, StyledUserName, StyledUserIcon } from "./User.styled";

const User = () => {
  return (
    <StyledUser>
      <StyledUserIcon src={userSvg} alt="user avatar" />
      <StyledUserName>Anna</StyledUserName>
    </StyledUser>
  );
};

export default User;
