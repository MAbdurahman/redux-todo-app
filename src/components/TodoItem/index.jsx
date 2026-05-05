import React, {useEffect, useState, Fragment} from 'react';
import {format} from 'date-fns';
import {motion} from 'framer-motion';
import {MdDelete, MdEdit} from 'react-icons/md';
import {useDispatch} from 'react-redux';
import CheckButton from '../CheckButton/index.jsx';
import {getClasses} from '../../assets/utils/functionsUtils.js';
import styles from './TodoItem.module.css';


const child = {
   hidden: {y: 20, opacity: 0},
   visible: {
      y: 0,
      opacity: 1
   }
};

export default function TodoItem() {
   /************************* variables *************************/
   const [checked, setChecked] = useState(false);
   const [updateModalOpen, setUpdateModalOpen] = useState(false);
   const dispatch = useDispatch();

   /************************* functions *************************/
   function handleCheck() {
      console.log('handleCheck');
   }

   function handleDelete() {
      console.log('handleDelete');
   }

   function handleUpdate() {
      console.log('handleUpdate');
   }


   return (
      <Fragment>
         <motion.div className={styles.item} variants={child}>
            <CheckButton checked={checked} handleCheck={handleCheck} />
            <div className={styles.todoDetails}>
               <div className={styles.texts}>
                  <p className={getClasses([styles.todoText])}>todo item title</p>
                  <p className={styles.time}>todo item date</p>
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
                  <MdEdit/>
               </div>
               <div
                  className={styles.deleteIcon}
                  onClick={() => handleDelete()}
                  onKeyDown={() => handleDelete()}
                  tabIndex={0}
                  role='button'
               >
                  <MdDelete/>
               </div>
            </div>
         </motion.div>
      </Fragment>

   );
}