import { useState } from "react";
import burgerMenuOpen from "../../../../assets/icons/burger-menu.svg";
import cross from "../../../../assets/icons/cross-small.svg";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import {
  BurgerMenuBtn,
  StyledHeader,
  MobileMenu,
  MobileMenuCloseBtn,
  MenuWrap,
} from "./Header.styled";

const Header = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  return (
    <StyledHeader>
      {!isMobileMenuOpen && (
        <>
          <Logo />
          <Navigation isMobileMenuOpen={isMobileMenuOpen} />
          <BurgerMenuBtn
            src={burgerMenuOpen}
            alt="open mobile menu"
            onClick={() => setisMobileMenuOpen(true)}
          />
        </>
      )}

      {isMobileMenuOpen && (
        <MobileMenu>
          <MenuWrap>
            <Logo />
            <MobileMenuCloseBtn
              src={cross}
              alt="close mobile menu"
              onClick={() => setisMobileMenuOpen(false)}
            />
          </MenuWrap>
          <Navigation
            isMobileMenuOpen={isMobileMenuOpen}
          />
        </MobileMenu>
      )}
    </StyledHeader>
  );
};

export default Header;
