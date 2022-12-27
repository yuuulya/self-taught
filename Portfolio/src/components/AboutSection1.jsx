import React from "react";
import style from "./AboutSection1.module.scss";

const AboutSection1 = () => {
  return (
    <div className={style.container}>
      <img src="assets/img/001.png" />
      <div className={style.title}>
        <div>Front-end Developer</div>
        <div className={style.title_name}>김율리아</div>
        <div className={style.title_id}>@yuuulya</div>
      </div>
    </div>
  );
};

export default AboutSection1;
