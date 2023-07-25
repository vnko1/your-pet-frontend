
import { useState } from "react";
import burgerMenuOpen from "../../../../assets/icons/burger-menu.svg";
import cross from "../../../../assets/icons/cross-small.svg";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
// import { Container } from "../../../../styles";
import {
  BurgerMenuBtn,
  StyledHeader,
  MobileMenu,
  MobileMenuCloseBtn,
  MenuWrap,
  BurgerMenuWrap,
} from "./Header.styled";

const Header = () => {
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);

  const onCloseMobileMenu = () => {
    if(isMobileMenuOpen) setisMobileMenuOpen(false);
  }

  return (
    <StyledHeader>
      {/* <Container> */}
        {!isMobileMenuOpen && (
          <>
            <Logo />
            <BurgerMenuWrap>
              <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                onCloseMobileMenu={onCloseMobileMenu}
              />
              <BurgerMenuBtn
                src={burgerMenuOpen}
                alt="open mobile menu"
                onClick={() => setisMobileMenuOpen(true)}
              />
            </BurgerMenuWrap>
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
              onCloseMobileMenu={onCloseMobileMenu}
            />
          </MobileMenu>
        )}
      {/* </Container> */}
    </StyledHeader>
  );
};

export default Header;