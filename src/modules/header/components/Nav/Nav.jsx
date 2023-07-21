import CommonNavLink from "./Nav.styled";

const Nav = () => {
    return (
      <div>
        <ul>
          {/* <li><CommonNavLink to={'/news'}>News</CommonNavLink></li>
            <li><CommonNavLink to={'/notices'}>Find pet</CommonNavLink></li>
            <li><CommonNavLink to={'/friends'}>Our friends</CommonNavLink></li> */}
          <li>
            <CommonNavLink href="">News</CommonNavLink>
          </li>
          <li>
            <CommonNavLink href="">Find pet</CommonNavLink>
          </li>
          <li>
            <CommonNavLink href="">Our friends</CommonNavLink>
          </li>
        </ul>
      </div>
    );
};

export default Nav;
