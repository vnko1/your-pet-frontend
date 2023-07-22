import PropTypes from "prop-types";
import User from "../User/User";
import Logout from "../../../../shared/components/Logout/Logout";

const UserNav = (props) => {
  const { isMobileMenuOpen, isDesktop } = props;
  return (
    <div>
      {(isMobileMenuOpen || isDesktop) && <Logout />}
      <User isMobileMenuOpen={isMobileMenuOpen} isDesktop={isDesktop} />
    </div>
  );
};

UserNav.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  isDesktop: PropTypes.bool,
};

export default UserNav;
