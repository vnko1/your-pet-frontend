import pawprintSvg from "../../../../assets/icons/pawprint.svg";
import {
  StyledLogin,
  StyledRegister,
  StyledLoginText,
  StyledLoginIcon,
} from "./AuthNav.styled";

const AuthNav = () => {
    return (
      <div>
        <StyledLogin>
                <StyledLoginText>Log IN</StyledLoginText>
                <StyledLoginIcon src={pawprintSvg} />
        </StyledLogin>
        <StyledRegister>Registration</StyledRegister>
      </div>
    );
}

export default AuthNav;