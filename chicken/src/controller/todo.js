import * as todoService from "../services/todo";
import { useMutation, useQuery, useQueryClient } from "react-query";

export const useAddTodo = () => {
  const client = useQueryClient();
  return useMutation(async (values) => {
    const result = await todoService.addTodo(values);
    client.invalidateQueries(["todos"]);
    return result;
  });
};

export const useTodos = () => {
  return useQuery(["todos"], async () => {
    return todoService.getTodos();
  });
};
