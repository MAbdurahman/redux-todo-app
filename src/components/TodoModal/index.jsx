import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { MdOutlineClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import SelectButton from '../SelectButton/index.jsx';
import Button from '../Button/index.jsx';
import styles from './TodoModal.module.css';

const dropIn = {
   hidden: {
      opacity: 0,
      transform: 'scale(0.9)',
   },
   visible: {
      transform: 'scale(1)',
      opacity: 1,
      transition: {
         duration: 0.1,
         type: 'spring',
         damping: 25,
         stiffness: 500,
      },
   },
   exit: {
      transform: 'scale(0.9)',
      opacity: 0,
   },
};

export default function TodoModal({ type, modalOpen, setModalOpen, todo }) {
   const [title, setTitle] = useState('');
   const [status, setStatus] = useState('incomplete');
   const dispatch = useDispatch();

   function handleSubmit(e) {
      e.preventDefault();
      console.log('target', e.target);
   }


   return (
      <div>
         <h2>TodoModal</h2>
      </div>

   );
}