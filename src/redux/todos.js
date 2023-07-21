import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
       id: 1,
       title: "List1",
       completed: false 
    },
    {
       id: 2,
       title: "List2",
       completed: false  
    },
    {
       id: 3,
       title: "List3",
       completed: false 
    },
    {
      id: 4,
      title: "List4",
      completed: false 
   },
  ],
};

const userSliceTodos = createSlice({
  name: 'Todos',
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
  },
});
export const { checkCompleted } = userSliceTodos.actions;
export default userSliceTodos.reducer;