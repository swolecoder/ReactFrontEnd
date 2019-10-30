import { combineReducers } from "redux";

const intialState = [
  { _id: "5db9512ab907f90dfb30e253", text: "dd", isCompleted: false, __v: 0 },
  { _id: "5db95484032871124815ab23", text: "sadas", isCompleted: false, __v: 0 }
];

export const todoList = (state = intialState, action) => {
  return state;
};

export default combineReducers({
  todoList: todoList
});
