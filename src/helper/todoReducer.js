export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];

    case "delete":
      return state.filter((todo) => todo.id !== action.payload);

    case "update":
      return state.filter((todo) =>todo.id) ? [...state, action.payload]:null;

    default:
      return state;
  }
};
