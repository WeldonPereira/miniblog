import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          Mini <span>Blog</span>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
