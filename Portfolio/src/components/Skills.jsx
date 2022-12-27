import React from "react";
import style from "./skills.module.scss";

const Skills = () => {
  return (
    <div className={style.section2Wrap}>
      <img className={style.section2Img} src="/assets/img/010.png" />
      <div className={style.skillTable}>
        <div className={style.tableLine}>
          <div className={style.tableTitle}>HTML</div>
          <div>
            <ul>
              <li>시맨틱 태그를 사용하여 마크업 작성</li>
              <li>목록, 표를 활용하여 레이아웃 제작</li>
              <li> 웹문서에 멀티미디어를 삽입하여 활용</li>
            </ul>
          </div>
        </div>
        <div className={style.tableLine}>
          <div className={style.tableTitle}>CSS</div>
          <div>
            <ul>
              <li>flex 와 grid를 활용하여 페이지 레이아웃 구성</li>
              <li>웹 폰트를 사용하여 다양한 텍스트 스타일 표현</li>
              <li>키프레임(@keyframes)을 사용하여 간단한 애니메이션 제작</li>
              <li>미디어쿼리를 활용하여 반응형 웹 제작</li>
            </ul>
          </div>
        </div>
        <div className={style.tableLine}>
          <div className={style.tableTitle}>Javascript</div>
          <div>
            <ul>
              <li>DOM에서 이벤트 처리</li>
              <li>Ajax, fetch를 사용한 비동기식 HTTP 통신</li>
              <li>JQuery 플로그인을 적용하여 기능구현</li>
              <li>정규 표현식을 이용한 폼 유효성 검사 </li>
              <li>로컬 저장소(local Storage)를 이용한 데이터 저장</li>
            </ul>
          </div>
        </div>
        <div className={style.tableLine}>
          <div className={style.tableTitle}>React</div>
          <div>
            <ul>
              <li>Hooks 패턴을 사용해 기능 구현</li>
              <li>Sass, CSS Module, styled-components 로 컴포넌트 스타일링</li>
              <li>react router를 사용해 페이지 이동 처리</li>
            </ul>
          </div>
        </div>
        <div className={style.tableLine}>
          <div className={style.tableTitle}>기타</div>
          <div>
            <ul>
              <li>Node Expres와 MariaDB를 연동하여 CRUD구현</li>
              <li>Java Spring과 MySQL를 연동하여 CRUD구현</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
