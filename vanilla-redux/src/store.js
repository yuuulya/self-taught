import { createStore } from "redux";
import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";

// @@ redux로 작성
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// @@ redux toolkit
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// ===================================================

// @@ redux로 작성
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // redux
//     // case ADD:
//     // redux toolkit
//     case addToDo.type:
//       console.log(action);
//       return [{ text: action.payload, id: Date.now() }, ...state];

//     // redux
//     // case DELETE:

//     // redux toolkit
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// @@ redux toolkit - createReducer
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     // state를 mutate
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) => {
//     // 새로운 array를 반환
//     return state.filter((toDo) => toDo.id !== action.payload);
//   },
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      return state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// const store = createStore(reducer);

const store = configureStore({ reducer: toDos.reducer });
console.log(store);

export const { add, remove } = toDos.actions;

export default store;
