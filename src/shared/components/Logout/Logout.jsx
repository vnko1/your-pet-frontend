import logoutSvg from "../../../assets/icons/logout.svg";
import {
  StyledLogout,
    StyledLogoutText,
    StyledLogoutIcon,
} from "./Logout.styled";


const Logout = () => {
  return (
    <>
      <StyledLogout>
        <StyledLogoutText>Log out</StyledLogoutText>
        <StyledLogoutIcon src={logoutSvg} alt="logout button" />
      </StyledLogout>
    </>
  );
};

export default Logout;
