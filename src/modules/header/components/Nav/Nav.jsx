import { CommonNavLink, StyledNavList } from "./Nav.styled";

const Nav = () => {
    return (
      <div>
        <StyledNavList>
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
        </StyledNavList>
      </div>
    );
};

export default Nav;
