import { useEffect, useReducer } from "react";
import { todoReducer } from "../helper/todoReducer";
import { toast } from 'react-toastify';

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const Reducer = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleDelete = (DataId) => {
    const action = {
      type: "delete",
      payload: DataId,
    };
    toast.error("Eliminado : " + DataId);
    dispatch(action);
  };

  const handleUpdate = (DataId) => {
    const action = {
      type: "update",
      payload: DataId,
    };

    toast.info("Actualizado: " + DataId);
    

    dispatch(action);
  };

  const handleAddTodo = (Data) => {
    dispatch({
      type: "add",
      payload: Data,
    });
  };
  useEffect(() => {
    localStorage.setItem ("todos", JSON.stringify(todos));
  }, [todos]);



  return [todos, handleDelete, handleAddTodo,handleUpdate];
};
