import { configureStore } from '@reduxjs/toolkit';
import userSliceTodos from './todos';

const store = configureStore({
  reducer: {
    todosReducer: userSliceTodos,
  },
});

export default store;