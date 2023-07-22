import PropTypes from "prop-types";
import User from "../User/User";
import Logout from "../../../../shared/components/Logout/Logout";

const UserNav = (props) => {
  const { isMobileMenuOpen } = props;
  return (
    <div>
      {isMobileMenuOpen && <Logout />}
      {!isMobileMenuOpen && <User />}
    </div>
  );
};

UserNav.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
};

export default UserNav;
