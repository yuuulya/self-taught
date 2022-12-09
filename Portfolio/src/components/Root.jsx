import React from "react";
import { Outlet } from "react-router";
import Menu from "./Menu";
import style from "./root.module.scss";

const Root = () => {
  return (
    <div className={style.root}>
      <Menu />
      <Outlet />
    </div>
  );
};

export default Root;
