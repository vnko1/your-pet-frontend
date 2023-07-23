import { CommonNavLink, StyledNavList, StyledNavItem } from "./Nav.styled";

const Nav = () => {
    return (
      <nav>
        <StyledNavList>
          {/* <li><CommonNavLink to={'/news'}>News</CommonNavLink></li>
            <li><CommonNavLink to={'/notices'}>Find pet</CommonNavLink></li>
            <li><CommonNavLink to={'/friends'}>Our friends</CommonNavLink></li> */}
          <StyledNavItem>
            <CommonNavLink href="">News</CommonNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <CommonNavLink href="">Find pet</CommonNavLink>
          </StyledNavItem>
          <StyledNavItem>
            <CommonNavLink href="">Our friends</CommonNavLink>
          </StyledNavItem>
        </StyledNavList>
      </nav>
    );
};

export default Nav;
