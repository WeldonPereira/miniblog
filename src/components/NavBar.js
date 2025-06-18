import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav
        style={{ boxShadow: "0 -2px 10px 0 rgba(0, 0, 0, 0.15)" }}
        className="flex items-center justify-between py-2 px-8"
      >
        <NavLink to="/" className="text-xl">
          Mini <span className="font-black uppercase">Blog</span>
        </NavLink>
        <ul className="flex">
          <li className="mx-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 font-black text-xl"
                  : "py-2 px-3 text-xl"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "py-2 px-3 font-black text-xl"
                  : "py-2 px-3 text-xl"
              }
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
