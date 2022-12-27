import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

const Menu = () => {
  return (
    <header>
      <ul className={style.menuWrap}>
        <li className={style.menu}>
          <Link to="/#no1">About</Link>
        </li>
        <li className={style.menu}>
          <Link to="/skills">Skills</Link>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
