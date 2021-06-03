import React, { useEffect } from "react";
import { Reducer } from "../../hooks/Reducer";
import { TableList } from "./TableList";

export const Table = () => {
  const [todos, handleDelete, handleAddTodo] = Reducer();



  return (
    <div className="container">
      <TableList todos={todos} handleDelete={handleDelete}></TableList>
    </div>
  );
};
