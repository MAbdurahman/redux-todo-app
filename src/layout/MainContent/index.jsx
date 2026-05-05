import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import TodoItem from '../../components/TodoItem/index.jsx';
import styles from './MainContent.module.css';

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

   return (
      <div>
         <TodoItem />
      </div>

   );
}