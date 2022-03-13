import { NavLink } from "react-router-dom";

//scss
import "./Nav.scss";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink
            className={(props) =>
              props.isActive ? "link_active " : "nav__link"
            }
            to="/all"
          >
            All
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={(props) =>
              props.isActive ? "link_active " : "nav__link"
            }
            to="/design"
          >
            Design Theory
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={(props) =>
              props.isActive ? "link_active " : "nav__link"
            }
            to="/ux"
          >
            UX
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={(props) =>
              props.isActive ? "link_active " : "nav__link"
            }
            to="/ui"
          >
            UI
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            className={(props) =>
              props.isActive ? "link_active " : "nav__link"
            }
            to="/typography"
          >
            Typography
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
