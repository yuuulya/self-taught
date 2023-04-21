export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "yul",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스 ",
      Images: [
        {
          src: "",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "wow",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "good",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "dummy data",
  User: {
    id: 1,
    nickname: "yuuulya",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
