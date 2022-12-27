import React from "react";
import style from "./AboutSection3.module.scss";

const AboutSection3 = () => {
  return (
    <div className={style.container}>
      <img src="assets/img/003.png" />
      <div className={style.title}>
        <div>[학력/교육사항</div>
      </div>
      <div className={style.content}>
        <ul>
          <li>
            <div className={style.eduTitle}>2017-03 ~ 2020-02 |</div>
            <div>
              한국외국어대학교 국제지역대학원 러시아CIS학과 경제 전공 • 석사
            </div>
            <div>(4.12 / 4.5학점) </div>
          </li>
          <li>
            <div className={style.eduTitle}>2021-12 ~ 2022-06 |</div>
            <div>[멀티캠퍼스] 지능형 웹 서비스 풀스택 개발 (수료)</div>
          </li>
          <li>
            <div className={style.eduTitle}>2022-09 ~ 2022-11 |</div>
            <div>[서초구청X패스트캠퍼스] UXUI 프로젝트십 (수료)</div>
          </li>
          <li>
            <div className={style.eduTitle}>2022-10 ~ 2022-11 |</div>
            <div>[안랩샘아카데미] 프로젝트로 배우는 자바스크립트 (수료)</div>
          </li>
          <li>
            <div className={style.eduTitle}>
              2022-10 ~
              (진행중)&nbsp;
              &nbsp; |
            </div>
            <div>
              [SBA 청년취업사관학교] 마포2기 기업연계형 프론트엔드 실무 프로젝트
              과정
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutSection3;
