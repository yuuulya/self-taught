import React from "react";
import style from "./AboutSection2.module.scss";

const AboutSection1 = () => {
  return (
    <div className={style.container}>
      <img src="assets/img/002.png" />
      <div className={style.title}>
        <div>저는</div>
        <div>호기심을 기록하는 개발자</div>
        <div>입니다</div>
      </div>
      <div className={style.content}>
        공부한 내용 중에서 호기심을 가지고 자율적으로 탐구한 내용을 꾸준히
        기록하고 있습니다. <br></br>개발자가 되기로 결심한 2021년 겨울부터
        꾸준히 블로그를 운영해 오고 있습니다. <br></br>총 게시글은 400개가
        넘으며 주 4회 이상 작성하고 있습니다.
        <br />
        <br />
        또한, 프론트엔드 개발자로써 필요한 역량에 대해 끊임없이 고민하고
        주도적으로 성장을 설계합니다. <br></br> 프론트엔드 개발자란 지금보다 더
        나은 사용자 중심의 UIUX를 구현하는 사람이라고 생각합니다. <br></br>
        피그마, 퍼블리싱, 백엔드까지 학습하며 UX와 디자인 구현 역량 향상을 위해
        노력하고 있습니다.
      </div>
    </div>
  );
};

export default AboutSection1;
