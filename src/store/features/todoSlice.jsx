import { createSlice } from '@reduxjs/toolkit';

const getInitialTodos = () => {
   /******************* get todoList *******************/
   const localTodoList = window.localStorage.getItem('redux_todoList');

   /*** if not empty, parse todoList to JSON format ***/
   if (localTodoList) {
      return JSON.parse(localTodoList);
   }
   window.localStorage.setItem('redux_todoList', []);
   return [];
};


const initialTodoState = {
   filterStatus: 'all',
   todoList: getInitialTodos(),
};

export const todoSlice = createSlice({
   name: 'todo',
   initialState: initialTodoState,
   reducers: {
      addTodo: (state, action) => {},
      deleteTodo: (state, action) => {},
      updateTodo: (state, action) => {},
      updateFilterStatus: (state, action) => {}
   }
});

export const {addTodo, deleteTodo, updateTodo, updateFilterStatus} = todoSlice.actions;
export default todoSlice.reducer;