import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import UserNav from "../UserNav/UserNav";
import AuthNav from "../AuthNav/AuthNav";
import { NavWrap } from "./Navigation.styled";

const Navigation = (props) => {
  const { isMobileMenuOpen } = props;
  const [isDesktop, setIsDesktop] = useState(false);
  const isRegistered = true;

    useEffect(() => {
        if (window.matchMedia("(min-width: 1280px)").matches) setIsDesktop(true); else setIsDesktop(false);

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 1280px)").matches) setIsDesktop(true);
      else setIsDesktop(false);
    });

    return () =>
      window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 1280px)").matches) setIsDesktop(true);
      else setIsDesktop(false);
    });
  }, []);

  return (
    <NavWrap>
      <>
        {isRegistered && (
          <UserNav isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
        )}
        {!isRegistered && !isMobileMenuOpen && <AuthNav />}
      </>

      {(isMobileMenuOpen || (!isMobileMenuOpen && isDesktop)) && <Nav />}
    </NavWrap>
  );
};

Navigation.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
};

export default Navigation;
