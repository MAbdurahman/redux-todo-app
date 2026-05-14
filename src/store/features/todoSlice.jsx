import {createSlice} from '@reduxjs/toolkit';

const getInitialToDoList = () => {
   /******************* get local toDoList *******************/
   const localToDoList = window.localStorage.getItem('redux_todoList');

   /*** if not empty, parse localToDoList to JSON format ***/
   if (localToDoList) {
      return JSON.parse(localToDoList);
   }
   window.localStorage.setItem('redux_todoList', []);
   return [];
};

const initialTodoState = {
   filterStatus: 'all',
   todoList: getInitialToDoList(),
};

export const todoSlice = createSlice({
   name: 'todo',
   initialState: initialTodoState,
   reducers: {
      addTodo: (state, action) => {
         state.todoList.push(action.payload);
         const redux_todoList = window.localStorage.getItem('redux_todoList');
         if (redux_todoList) {
            const todoListArr = JSON.parse(redux_todoList);
            todoListArr.push({...action.payload});
            window.localStorage.setItem(
               'redux_todoList',
               JSON.stringify(todoListArr)
            );
         } else {
            window.localStorage.setItem('redux_todoList', JSON.stringify([{...action.payload}]));
         }
      },
      deleteTodo: (state, action) => {
         const redux_todoList = window.localStorage.getItem('redux_todoList');
         if (redux_todoList) {
            const todoListArr = JSON.parse(redux_todoList);
            todoListArr.forEach((todo, index) => {
               if (todo.id === action.payload) {
                  todoListArr.splice(index, 1);
               }
            });
            window.localStorage.setItem('redux_todoList', JSON.stringify(todoListArr));
            state.todoList = todoListArr;

         }
      },
      updateTodo: (state, action) => {
         const redux_todoList = window.localStorage.getItem('redux_todoList');
         if (redux_todoList) {
            const todoListArr = JSON.parse(redux_todoList);
            todoListArr.forEach(todo => {
               if (todo.id === action.payload.id) {
                  todo.status = action.payload.status;
                  todo.title = action.payload.title;
               }
            });

            window.localStorage.setItem('redux_todoList', JSON.stringify(todoListArr));
            state.todoList = [...todoListArr];
         }
      },
      updateFilterStatus: (state, action) => {
         state.filterStatus = action.payload;
      }
   }
});

export const {
   addTodo,
   deleteTodo,
   updateTodo,
   updateFilterStatus
} = todoSlice.actions;
export default todoSlice.reducer;