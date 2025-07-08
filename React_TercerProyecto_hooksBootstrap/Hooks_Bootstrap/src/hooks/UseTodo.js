import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

export const UseTodo = () => {
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [state, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  // Función para agregar un todo
  const handleAddTodo = (description) => {
    dispatch({
      type: "[TODO] Add Todo",
      payload: { description },
    });
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle todo",
      payload: id,
    });
  };

  return {
    state,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
