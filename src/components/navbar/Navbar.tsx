import { useState } from "react";
import styledNav from "./Navbar.module.css";
import { CircleHelp, Globe, CircleUserRound } from "lucide-react";
export const Navbar = () => {
  const [btnHovered, setBtnHovered] = useState<string | null>(null);

  const handleMouseEnter = (btn: string) => {
    setBtnHovered(btn);
  };
  const handleMouseLeave = () => {
    setBtnHovered(null);
  };
  return (
    <header className={`${styledNav.header}`}>
      <nav className={`${styledNav.navbar}`}>
        <picture>
          <img src="../src/img/navbar-img/logoTesla.png" alt="" />
        </picture>

        <ul className={`${styledNav.list}`}>
          {["Vehicles", "Energy", "Charging", "Discover", "Shop"].map(
            (item) => (
              <li key={item}>
                <button
                  className={
                    btnHovered === item
                      ? `${styledNav.btnHover}`
                      : `${styledNav.btn}`
                  }
                  onMouseEnter={() => handleMouseEnter(item)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span>{item}</span>
                </button>
              </li>
            )
          )}
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
