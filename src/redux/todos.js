import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Take the dog out for a walk",
      completed: true,
    },
    {
      id: 2,
      title: "Wash the car",
      completed: false,
    },
    {
      id: 3,
      title: "Do the dishes",
      completed: true,
    },
    {
      id: 4,
      title: "Do laundary",
      completed: false,
    },
  ],
};

const userSliceTodos = createSlice({
  name: "Todos",
  initialState,
  reducers: {
    checkCompleted: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
      };
    },
    addTask: (state, action) => {
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 100,
            title: action.payload,
            completed: false,
          },
        ],
      };
    },
    removeTask: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    },
    editTask: (state, action) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
      };
    },
  },
});
export const { checkCompleted, addTask, editTask, removeTask } = userSliceTodos.actions;
export default userSliceTodos.reducer;
