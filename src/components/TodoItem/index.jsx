import React, {useEffect, useState, Fragment} from 'react';
import {format} from 'date-fns';
import {motion} from 'framer-motion';
import {MdDelete, MdEdit} from 'react-icons/md';
import {useDispatch} from 'react-redux';
import CheckButton from '../CheckButton/index.jsx';
import TodoModal from '../TodoModal/index.jsx';
import {getClasses} from '../../assets/utils/functionsUtils.js';
import styles from './TodoItem.module.scss';
import {deleteTodo, updateTodo} from '../../store/features/todoSlice.jsx';
import useNotification from '../../assets/hooks/useNotification.jsx';

const child = {
   hidden: {y: 20, opacity: 0},
   visible: {
      y: 0,
      opacity: 1
   }
};

export default function TodoItem({todo}) {
   /************************* variables *************************/
   const [checked, setChecked] = useState(false);
   const [updateModalOpen, setUpdateModalOpen] = useState(false);
   const dispatch = useDispatch();
   const {updateNotification} = useNotification();

   /************************* functions *************************/
   useEffect(() => {
      if (todo.status === 'complete') {
         setChecked(true);
      } else {
         setChecked(false);
      }
   }, [todo.status]);

   function handleCheck() {
      setChecked(!checked);
      dispatch(
         updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' }));
      updateNotification('success', 'ToDo item updated successfully!');
   }

   function handleDelete() {
      dispatch(deleteTodo(todo.id));
      updateNotification('success', 'ToDo item deleted successfully!');
   }

   function handleUpdate() {
      /*dispatch(updateTodo(todo.id));*/
      setUpdateModalOpen(true);
   }


   return (
      <Fragment>
         <motion.div className={styles.item} variants={child} >
            <div className={styles.todoDetails}>
               <CheckButton checked={checked} handleCheck={handleCheck} />
               <div className={styles.texts}>
                  <p
                     className={getClasses([
                        styles.todoText,
                        todo.status === 'complete' &&
                        styles['todoText__completed'],
                     ])}
                  >
                     {todo.title}
                  </p>
                  <p className={styles.time}>
                     {format(new Date(todo.time), 'p, dd MMMM yyyy')}
                  </p>
               </div>
            </div>
            <div className={styles.todoActions}>
               <div
                  className={styles.editIcon}
                  onClick={() => handleUpdate()}
                  onKeyDown={() => handleUpdate()}
                  tabIndex={0}
                  role='button'
               >
                  <MdEdit />
               </div>
               <div
                  className={styles.deleteIcon}
                  onClick={() => handleDelete()}
                  onKeyDown={() => handleDelete()}
                  tabIndex={0}
                  role='button'
               >
                  <MdDelete />
               </div>
            </div>
         </motion.div>
         <TodoModal
            type='update'
            modalOpen={updateModalOpen}
            setModalOpen={setUpdateModalOpen}
            todo={todo}
         />
      </Fragment>
   );
}