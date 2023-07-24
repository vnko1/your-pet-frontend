import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import userSvg from "../../../../assets/icons/avatar.svg";
import { StyledUser, StyledUserName, StyledUserIcon } from "./User.styled";

const User = (props) => {
  const { isMobileMenuOpen, isDesktop } = props;
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onDetectTablet = function() {
      if (
        window.matchMedia("(min-width: 768px)").matches &&
        window.matchMedia("(max-width: 1279px)").matches
      ) setIsTablet(true);
      else setIsTablet(false);
    }

    onDetectTablet();
    
    window.addEventListener("resize", onDetectTablet);

    return () =>
      window.addEventListener("resize", onDetectTablet);
  }, []);

  useEffect(() => {
    const onDetectMobile = function () {
      if (window.matchMedia("(max-width: 767px)").matches)
        setIsMobile(true);
      else setIsMobile(false);
    };

    onDetectMobile();

    window.addEventListener("resize", onDetectMobile);

    return () => window.addEventListener("resize", onDetectMobile);
  }, []);

  return (
    <StyledUser to="/user">
      {((!isTablet) ||
        (isTablet && !isMobileMenuOpen)) &&
          <StyledUserIcon src={userSvg} alt="user avatar" />
        }

      {((isMobile && isMobileMenuOpen) ||
        (isTablet && !isMobileMenuOpen) ||
        (isDesktop)) && <StyledUserName>Anna</StyledUserName>}
      
    </StyledUser>
  );
};

User.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

export default User;
