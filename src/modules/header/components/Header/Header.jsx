
import { useState } from "react";
import burgerMenuOpen from "../../../../assets/icons/burger-menu.svg";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
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
            {/* <MobileMenuCloseBtn
                src={cross}
                alt="close mobile menu"
                onClick={() => setisMobileMenuOpen(false)}
              /> */}
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