import React from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.scss";

const Menu = () => {
  return (
    <header>
      <div className={style.logo}></div>
      <ul className={style.menuWrap}>
        <li className={style.menu}>
          <Link to="/">HOME</Link>
        </li>
        <li className={style.menu}>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </header>
  );
};

export default Menu;
