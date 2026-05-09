import React, {useMemo} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem/index.jsx';
import styles from './MainContent.module.scss';

const container = {
   hidden: { opacity: 1 },
   visible: {
      opacity: 1,
      scale: 1,
      transition: {
         staggerChildren: 0.2,
      },
   },
};
const child = {
   hidden: { y: 20, opacity: 0 },
   visible: {
      y: 0,
      opacity: 1,
   },
};

export default function MainContent() {
   /*************************** variables ***************************/
   const todoList = useSelector(state => state.todo.todoList);
   const filterStatus = useSelector(state => state.todo.filterStatus);
   const sortedTodoList = [...todoList];

   /*************************** functions ***************************/
   sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));

   const filteredTodoList = sortedTodoList.filter(item => {
      if (filterStatus === 'all') {
         return true;
      }
      return item.status === filterStatus;
   });

   return (
      <motion.div
         className={styles.mainWrapper}
         variants={container}
         initial='hidden'
         animate='visible'
      >
         <AnimatePresence>
            {filteredTodoList && filteredTodoList.length > 0 ? (
               filteredTodoList.map(todo => (
                  <TodoItem key={todo.id} todo={todo} />
               ))
            ) : (
               <motion.div variants={child} className={styles.emptyTextWrapper}>
                  <h4 className={styles.emptyText}>{'No ToDo'}</h4>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>

   );
}