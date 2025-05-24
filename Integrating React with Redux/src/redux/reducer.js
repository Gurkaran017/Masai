import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actions";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        title: action.payload.title,
        status: false
      };
      return { ...state, todos: [...state.todos, newTodo] };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: !todo.status } : todo
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      };

    default:
      return state;
  }
};
