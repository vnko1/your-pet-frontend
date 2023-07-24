import { Link } from "react-router-dom";
import logoSvg from "../../../../assets/icons/logo.svg";
import StyledLogo from "./Logo.styled";

const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo src={logoSvg} alt="logo" />
    </Link>
  );
};

export default Logo;
