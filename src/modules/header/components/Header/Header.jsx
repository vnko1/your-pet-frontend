
import { useState } from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import spriteSvg from "../../../../assets/icons.svg";
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
      {!isMobileMenuOpen && (
        <>
          <Logo />
          <BurgerMenuWrap>
            <Navigation
              isMobileMenuOpen={isMobileMenuOpen}
              onCloseMobileMenu={onCloseMobileMenu}
            />
            <BurgerMenuBtn onClick={() => setisMobileMenuOpen(true)}>
              <use href={spriteSvg + "#menu-hamburger"} />
            </BurgerMenuBtn>
          </BurgerMenuWrap>
        </>
      )}

      {isMobileMenuOpen && (
        <MobileMenu>
          <MenuWrap>
            <Logo />
            <MobileMenuCloseBtn onClick={() => setisMobileMenuOpen(false)}>
              <path
                stroke="inherit"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M19 5 5 19M5 5l14 14"
              />
            </MobileMenuCloseBtn>
          </MenuWrap>
          <Navigation
            isMobileMenuOpen={isMobileMenuOpen}
            onCloseMobileMenu={onCloseMobileMenu}
          />
        </MobileMenu>
      )}
    </StyledHeader>
  );
};

export default Header;