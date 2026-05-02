import { createSlice } from '@reduxjs/toolkit';

const getInitialTodos = () => {
   /****************** get todoList ******************/
   const localTodoList = window.localStorage.getItem('redux_todoList');

   /*** parse todoList to JSON format if not empty ***/
   if (localTodoList) {
      return JSON.parse(localTodoList);
   }
   window.localStorage.setItem('redux_todoList', []);
   return [];
};


const initialValue = {
   filterStatus: 'all',
   todoList: getInitialTodos(),
};

export const todoSlice = createSlice({
   name: 'todo',
   initialState: initialValue,
   reducers: {
      addTodo: (state, action) => {},
      deleteTodo: (state, action) => {},
      updateTodo: (state, action) => {},
      updateFilterStatus: (state, action) => {}
   }

});

export const {addTodo, deleteTodo, updateTodo, updateFilterStatus} = todoSlice.actions;
export default todoSlice.reducer;