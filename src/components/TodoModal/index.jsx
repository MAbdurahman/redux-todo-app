import React, {useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import {MdOutlineClose} from 'react-icons/md';
import {useDispatch} from 'react-redux';
import {AnimatePresence, motion} from 'framer-motion';
import SelectButton from '../SelectButton/index.jsx';
import ModalSelectButton from '../ModalSelectButton/index.jsx';
import useNotification from '../../assets/hooks/useNotification.jsx';
import {addTodo, updateTodo} from '../../store/features/todoSlice.jsx';
import Button from '../Button/index.jsx';
import styles from './TodoModal.module.scss';

const dropIn = {
   hidden: {
      opacity: 0,
      transform: 'scale(0.9)'
   },
   visible: {
      transform: 'scale(1)',
      opacity: 1,
      transition: {
         duration: 0.1,
         type: 'spring',
         damping: 25,
         stiffness: 500
      }
   },
   exit: {
      transform: 'scale(0.9)',
      opacity: 0
   }
};


export default function TodoModal({type, modalOpen, setModalOpen, todo}) {

   /************************* variables *************************/
   const [title, setTitle] = useState('');
   const [status, setStatus] = useState('incomplete');
   const dispatch = useDispatch();
   const {updateNotification} = useNotification();

   const options = [
      {value: 'incomplete', label: 'Incomplete'},
      {value: 'completed', label: 'Completed'}
   ];
   const customStyles = {
      control: (provided) => ({
         ...provided,
         position: 'relative',
         width: '100%',
         textAlign: 'left',
         fontSize: '1.6rem',
         fontWeight: 800,
         background: '#7a7a7a',
         borderRadius: '5px',
         border: 'none',
         boxShadow: 'none',
         cursor: 'pointer'
      }),
      singleValue: (provided, state) => ({
         ...provided,
         color: state.isSelected ? '#fafafa' : '#2e2e2e'
      }),
      option: (provided, state) => ({
         ...provided, '&:hover': {
            color: '#fafafa' // Change the color on hover
         },
         background: state.isFocused ? '#7a7a7a' : '#949494',
         textAlign: 'left',
         fontSize: '1.6rem',
         fontWeight: 800,
         border: '1px solid #fafafa',
         borderRadius: '5px',
         cursor: 'pointer'
      }),
      menu: (provided) => ({
         ...provided,
         zIndex: 100,
         padding: 0
      }),
      menuList: base => ({
         ...base,
         // kill the white space on first and last option
         padding: 0
      })

   };
   /************************* functions *************************/
   useEffect(() => {
      if (type === 'update' && todo) {
         setTitle(todo.title);
         setStatus(todo.status);
      } else {
         setTitle('');
         setStatus('incomplete');
      }
   }, [type, todo, modalOpen]);


   function handleSubmit(e) {
      e.preventDefault();
      if (title === '') {
         updateNotification('error', 'A Task Title is required!');
         return;
      }
      if (title && status) {
         if (type === 'add') {
            dispatch(
               addTodo({
                  id: uuid(),
                  title,
                  status,
                  time: new Date().toLocaleString()
               })
            );
            updateNotification('success', 'ToDo item added successfully!');

         }
         if (type === 'update') {
            if (todo.title !== title || todo.status !== status) {
               dispatch(updateTodo({...todo, title, status}));
               updateNotification('success', 'ToDo item updated successfully!');

            } else {
               updateNotification('error', 'Click Cancel - Nothing updated!');
               return;
            }
         }
         setModalOpen(false);
      }
   }

   return (
      <AnimatePresence>
         {modalOpen && (
            <motion.div
               className={styles.wrapper}
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               exit={{opacity: 0}}
            >
               <motion.div
                  className={styles.container}
                  variants={dropIn}
                  initial='hidden'
                  animate='visible'
                  exit='exit'
               >
                  <motion.div
                     className={styles.closeButton}
                     onKeyDown={() => setModalOpen(false)}
                     onClick={() => setModalOpen(false)}
                     role='button'
                     tabIndex={0}
                     // animation
                     initial={{top: 40, opacity: 0}}
                     animate={{top: -10, opacity: 1}}
                     exit={{top: 40, opacity: 0}}
                  >
                     <MdOutlineClose/>
                  </motion.div>
                  <form className={styles.form} onSubmit={e => handleSubmit(e)}>
                     <h2 className={styles.formTitle}>
                        {type === 'add' ? 'Add' : 'Update'} ToDo
                     </h2>
                     <label htmlFor='title'>
                        Title
                        <input
                           type='text'
                           id='title'
                           value={title}
                           onChange={e => setTitle(e.target.value)}
                        />
                     </label>
                     <label htmlFor={type}>
                        Status

                        <ModalSelectButton
                           onChange={option => setStatus(option)}
                        >
                           {options.length > 0 && (options.map(option => (
                                 <option key={option.value} className={styles.option} value={option.value}>{option.label}</option>
                              )))}
                        </ModalSelectButton>

                     </label>

                     <div className={styles.buttonContainer}>
                        <Button
                           variant='secondary'
                           onClick={() => setModalOpen(false)}
                        >
                           Cancel
                        </Button>
                        <Button type='submit' variant='primary'>
                           {type === 'add' ? 'Add ToDo' : 'Update ToDo'}
                        </Button>

                     </div>
                  </form>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}