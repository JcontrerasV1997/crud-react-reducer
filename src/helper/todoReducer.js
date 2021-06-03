import { useEffect } from "react";

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "update":
      const update = state.map((cita) => {
        if (cita.id === action.payload.id) {
          return action.payload;
        }
        return cita
      });

       return update

    default:
      return state;
  }
};
