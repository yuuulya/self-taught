//step 1 요구사항 구현을 위한 전략 

//TODO 메뉴 추가 
// - [1] 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴가 추가된다. 
// - [2] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다. 
// - [3] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [4] 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.
// - [5] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다. 
// - [6] 사용자 입력값이 빈 값이라면 추가되지 않는다. 

const $ = (selector) => document.querySelector(selector);
// $ : 자바스크립트에서의 DOM element를 가져올 때 관용적으로 많이 사용

function App() {
  //[2]==================================================================
  // form 태그가 자동으로 전송되는걸 방지 
  $("#espresso-menu-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      // preventDefault : 이벤트 예방 메소드
    });
  //★★ submit = form 에 전송되는 이벤트 

  //[1]==================================================================
  //메뉴의 이름을 입력받음
  $("#espresso-menu-name")
    .addEventListener("keypress", (e) => {
      if (e.key !== "Enter") {
        return;
      }
      if ($("#espresso-menu-name").value === "") {
        alert("값을 입력해주세요");
        return;
        //뒷 내용이 실행되는 것을 방지 
      }
      if (e.key === 'Enter') {
        const espressoMenuName = $("#espresso-menu-name").value;
        const menuItemTemplate = (espressoMenuName) => {
          return `
          <li class="menu-list-item d-flex items-center py-2">
            <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
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
          </li>
          `;
        };
        //[4]==================================================================
        $("#espresso-menu-list").insertAdjacentHTML(
          "BEFOREEND",
          // 위와 같이 beforeend를 대문자로 써도 무방
          menuItemTemplate(espressoMenuName));
        // insertAdjacentHTML ; https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML

        //[3]==================================================================
        // querySelectorAll
        const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
        $(".menu-count").innerText = `총 ${menuCount} 개`;
        //[5]==================================================================
        $("#espresso-menu-name").value = "";

        console.log(menuItemTemplate(espressoMenuName));
      }
    });
}

App();


//TODO 메뉴 수정
// - [ ] 메뉴의 수정 버튼을 누르면 prompt 인터페이스가 나온다.
// - [ ] 사용자 입력값이 빈 값이라면 추가되지 않는다. (**)
// - [ ] 확인 버튼을 누르면 메뉴 정보를 업데이트 한다.
// - [ ] 취소 버튼을 누르면 다시 원래 페이지로 돌아온다.

//TODO 메뉴 삭제
// - [ ] 메뉴 삭제 버튼을 누르면 confirm 알림창이 뜬다.
// - [ ] confirm 에서 확인을 누르면 메뉴가 삭제된다
// - [ ] confirm에서 취소를 누르면 메뉴가 삭제되지 않는다.

// 구현하고자 하는 기능의 요구사항을 정리하고 그 요구사항에 맞는 지식에 맞춰 공부해 나가면서 구현하면
// 좀 더 재미있게 구현해 나갈 수 있다. 

