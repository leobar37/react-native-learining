import AsyncStorage from "@react-native-async-storage/async-storage";
import { nanoid } from "nanoid";
const TODO_KEY = "TODOS_KEY";

export const getTodos = async () => {
  const values = await AsyncStorage.getItem(TODO_KEY);
  if (values) {
    return JSON.parse(values);
  } else {
    return [];
  }
};
export const addTodo = async ({ text, checked }) => {
  const todos = await getTodos();
  const newTodo = {
    id: nanoid(),
    text,
    checked,
  };
  todos.push(newTodo);
  await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
  return todos;
};

export const removeTodo = async (id) => {
  const todos = await getTodos();
  const result = todos.filter((d) => d.id !== id);
  await AsyncStorage.setItem(TODO_KEY, JSON.stringify(result));
  return todos;
};
export const editTodo = async (id, { text, checked }) => {
  const todos = await getTodos();
  const idx = todos.findIndex((d) => d.id == id);
  const todo = todos[idx];
  const updatedTodo = {
    ...todo,
    text,
    checked,
  };
  todos.splice(idx, 0, updatedTodo);
  await AsyncStorage.setItem(TODO_KEY, JSON.stringify(todos));
  return todos;
};
