// import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
      <div>
        <ul>
          {/* <li><NavLink to={'/news'}>News</NavLink></li>
            <li><NavLink to={'/notices'}>Find pet</NavLink></li>
            <li><NavLink to={'/friends'}>Our friends</NavLink></li> */}
          <li><a href="">News</a></li>
          <li><a href="">Find pet</a></li>
          <li><a href="">Our friends</a></li>
        </ul>
      </div>
    );
};

export default Nav;
