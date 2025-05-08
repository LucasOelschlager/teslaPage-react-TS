import styledNav from "./Navbar.module.css";
import { CircleHelp, Globe, CircleUserRound } from "lucide-react";
export const Navbar = () => {
  return (
    <header className={`${styledNav.header}`}>
      <nav className={`${styledNav.navbar}`}>
        <picture>
          <img src="../src/img/navbar-img/logoTesla.png" alt="" />
        </picture>

        <ul className={`${styledNav.list}`}>
          <li>
            <button className={`${styledNav.btn}`}>
              <span>Vehicles</span>
            </button>
          </li>
          <li>
            <button className={`${styledNav.btn}`}>
              <span>Energy</span>
            </button>
          </li>
          <li>
            <button className={`${styledNav.btn}`}>
              <span>Charging</span>
            </button>
          </li>
          <li>
            <button className={`${styledNav.btn}`}>
              <span>Discover</span>
            </button>
          </li>
          <li>
            <button className={`${styledNav.btn}`}>
              <span>Shop</span>
            </button>
          </li>
        </ul>

        <div className={`${styledNav.btnContainer}`}>
          <CircleHelp color="white" />
          <Globe color="white" />
          <CircleUserRound color="white" />
        </div>
      </nav>
    </header>
  );
};
