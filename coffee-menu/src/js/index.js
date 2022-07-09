/* 
[요구사항 1]
  
//TODO 메뉴 추가 
- 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴가 추가된다. 
- 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다. 
- 총 메뉴 갯수를 count하여 상단에 보여준다.
- 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
- 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다. 
- 사용자 입력값이 빈 값이라면 추가되지 않는다. 

//TODO 메뉴 수정
- 메뉴의 수정 버튼을 누르면 prompt 인터페이스가 나온다.
- 사용자 입력값이 빈 값이라면 추가되지 않는다. (**)
- 확인 버튼을 누르면 메뉴 정보를 업데이트 한다.
- 취소 버튼을 누르면 다시 원래 페이지로 돌아온다.

//TODO 메뉴 삭제
- 메뉴 삭제 버튼을 누르면 confirm 알림창이 뜬다.
- confirm 에서 확인을 누르면 메뉴가 삭제된다
- confirm에서 취소를 누르면 메뉴가 삭제되지 않는다.
*/

/*
[요구사항 2]
TODO  loca storage Read & Write
- lcoal storage에 데이터를 저장한다
- 새로고침하면 저장된 데이터를 읽어온다. 

TODO category 
- 에스프레소 메뉴판
- 프라푸치노 메뉴판
- 블렌디드 메뉴판
- 티바나 메뉴판 
- 디저트 메뉴판

TODO main page Read & Randering
- 페이지로 최초로 접속했을 때 에스프레소 메뉴탭의 local storage 정보를 가져온다.
- local storage에 있는 에스프레소 메뉴를 페이지에 그려준다. 

TODO sold out 
- 품절 버튼을 추가한다.
- 품절버튼을 누르면 local storage에서 제품의 상태가 바뀐다.
- 제품의 상태가 바뀌면 제품 이름 위에 취소선이 생긴다.

*/


/* 
[요구사항 3]
 링크에 있는 웹 서버 저장소를 clone하여 로컬에서 웹 서버를 실행시킨다.
 웹 서버를 띄워서 실제 서버에 데이터의 변경을 저장하는 형태로 리팩터링한다.
 localStorage에 저장하는 로직은 지운다.
 fetch 비동기 api를 사용하는 부분을 async await을 사용하여 구현한다.
 API 통신이 실패하는 경우에 대해 사용자가 알 수 있게 alert으로 예외처리를 진행한다.
 중복되는 메뉴는 추가할 수 없다.
*/

import { $ } from "./dom.js";

import store from './store.js';

const BASE_URL = "http://localhost:3000/api";

const MenuApi = {
  async getAllMenuByCategory(category) {
    //await 을 사용하기 위해서는 async를 써줘야 함 
    const response = await fetch(`${BASE_URL}/category/${category}/menu`)
    return response.json;
  },
  async createMenu(name) {
    const response = await fetch(`${BASE_URL}/category/${this.currentCategory}/menu`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });
    if (!response.ok) {
      console.error("에러가 발생했습니다");
    }
  },
};

function App() {

  this.menu = {
    espresso: [],
    frappuccino: [],
    blended: [],
    teavana: [],
    desert: [],
  };
  //상태값을 선언
  //어떤 형태로 데이터를 관리할 것인지 초기화로 명시 

  this.currentCategory = 'espresso';
  //카테고리 선택에 따라 메뉴 변경. 단, 초기값 espresso

  this.init = async () => {
    /*
    if (store.getLocalStorage()) {
      this.menu = store.getLocalStorage();
    };
    */
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    render();
    initEventListeners();
  };

  //페이지 렌더링
  const render = () => {
    const template = this.menu[this.currentCategory].map((menuItem, index) => {
      return `
      <li data-menu-id="${index}" class= "menu-list-item d-flex items-center py-2">
        <span class="w-100 pl-2 menu-name ${menuItem.soldOut ? 'sold-out' : ""} ">${menuItem.name}</span>
        <button
        type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-sold-out-button"
        >
          품절
        </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
        >
          수정
        </button>
        <button
          type="button"
          class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
        >
          삭제
        </button>
      </li>`;
    })
      .join("");
    $("#menu-list").innerHTML = template;
    updateMenuCount();
  };

  //메뉴 갯수 변경
  const updateMenuCount = () => {
    const menuCount = this.menu[this.currentCategory].length
    $(".menu-count").innerText = `총 ${menuCount} 개`;
  };

  //메뉴 추가
  const addMenuName = async () => {
    //비동기 통신이 있는 함수에 async

    if ($("#menu-name").value === "") {
      alert("값을 입력해주세요");
      return;
      //return : 뒷 내용이 실행되는 것을 방지 
    }
    const menuName = $("#menu-name").value;

    await MenuApi.createMenu(menuName);
    this.menu[this.currentCategory] = await MenuApi.getAllMenuByCategory(
      this.currentCategory
    );
    render();
    $("#menu-name").value = "";
    /* 
    [local storage 저장시 사용하는 코드]

    this.menu[this.currentCategory].push({ name: menuName });
    //카테고리별로 localstorage에 저장 
    //특정 key값을 문자열로 표현해줄 때, menu[this.currentCategory]로 작성할 수 있음 

    menu[this.currentCategory] = espresso 
    store.setLocalStorage(this.menu);
    */
  };

  //메뉴 이름 변경
  const updateMenuName = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    const $menuName = e.target.closest("li").querySelector(".menu-name");
    const updatedMenuName = prompt(
      "수정할 메뉴명을 입력해 주세요",
      $menuName.innerText);
    this.menu[this.currentCategory][menuId].name = updatedMenuName;
    store.setLocalStorage(this.menu);
    render();

  };

  //메뉴 삭제
  const removeMenuName = (e) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      const menuId = e.target.closest("li").dataset.menuId;
      this.menu[this.currentCategory].splice(menuId, 1);
      store.setLocalStorage(this.menu);
      render();
    }
  };

  const soldOutMenu = (e) => {
    const menuId = e.target.closest("li").dataset.menuId;
    this.menu[this.currentCategory][menuId].soldOut = !this.menu[this.currentCategory][menuId].soldOut;
    store.setLocalStorage(this.menu);
    render();
  };

  //Event Binding====================================
  const initEventListeners = () => {

    //★★ submit = form 에 전송되는 이벤트 
    $("#menu-submit-button").addEventListener("click", addMenuName);

    $("#menu-list").addEventListener("click", (e) => {
      if (e.target.classList.contains("menu-edit-button")) {
        //classList 라는 메서드를 이용해서 값들을 배열처럼 가지고 올 수 있음
        updateMenuName(e);
        return;
      }

      if (e.target.classList.contains("menu-remove-button")) {
        removeMenuName(e);
        return;
      }

      if (e.target.classList.contains("menu-sold-out-button")) {
        soldOutMenu(e);
        return;
      }
    });

    // form 태그가 자동으로 전송되는걸 방지 
    $("#menu-form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        // preventDefault : 이벤트 예방 메소드
      });

    //메뉴의 이름을 입력받음
    $("#menu-name")
      .addEventListener("keypress", (e) => {
        if (e.key !== "Enter") {
          return;
        }
        addMenuName();
      });

    //카테고리 변경
    $("nav").addEventListener("click", (e) => {
      const isCategorybtn = e.target.classList.contains("cafe-category-name");
      //cafe-category-name 사이에 있는 공간을 클릭했을때 이벤트 실행 방지
      if (isCategorybtn) {
        const categoryName = e.target.dataset.categoryName;
        this.currentCategory = categoryName;
        $("#category-title").innerText = `${e.target.innerText} 메뉴관리`;
        render();
      }
    });

  };
};

const app = new App();
app.init();

