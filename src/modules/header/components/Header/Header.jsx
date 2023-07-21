import burgerMenu from "../../../../assets/icons/burger-menu.svg";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import { BurgerMenuBtn, StyledHeader } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
      <BurgerMenuBtn
        src={burgerMenu}
        alt="burger menu"
        onClick={() => console.log("burger-menu")}
      />
    </StyledHeader>
  );
};

export default Header;
