import { ADD, DELETE, UPDATE } from "../actionTypes";

// Action tanımları bileşen içerisnde çok fazla kod tekrarına ve kod kalabılığına sebep olabiliyor.

export const addTodo = (payload) => {
  return { type: ADD, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE, payload };
};

export const updateTodo = (payload) => {
  return { type: UPDATE, payload };
};
