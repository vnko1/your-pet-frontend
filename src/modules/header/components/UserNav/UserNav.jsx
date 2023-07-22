import PropTypes from "prop-types";
import User from "../User/User";
import Logout from "../../../../shared/components/Logout/Logout";
import StyledUserNav from "./UserNav.styled";

const UserNav = (props) => {
  const { isMobileMenuOpen, isDesktop } = props;
  return (
    <StyledUserNav>
      {(isMobileMenuOpen || isDesktop) && <Logout />}
      <User isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
    </StyledUserNav>
  );
};

UserNav.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

export default UserNav;
