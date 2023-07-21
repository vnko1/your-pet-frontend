import userSvg from "../../../../assets/icons/avatar.svg";
import { StyledUserName, StyledUserIcon } from "./User.styled";

const User = () => {
    return (
      <div>
        <StyledUserIcon src={userSvg} alt="user avatar" />
        <StyledUserName>Anna</StyledUserName>
      </div>
    );
    
}

export default User;