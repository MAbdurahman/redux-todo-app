import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button/index.jsx';
import SelectButton from '../../components/SelectButton/index.jsx';
import TodoModal from '../../components/TodoModal/index.jsx';
import {updateFilterStatus} from '../../store/features/todoSlice.jsx';
import styles from './Header.module.css';
import {addTodo} from '../../store/features/todoSlice.jsx';

export default function Header() {
   /************************* variables *************************/
   const [modalOpen, setModalOpen] = useState(false);
   const initialFilterStatus = useSelector(state => state.todo.filterStatus);
   const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
   const dispatch = useDispatch();

   const options = [
      {value: 'all', label: 'All ToDos'},
      {value: 'completed', label: 'Completed'},
      {value: 'incomplete', label: 'Incomplete'}
   ];
   const customStyles = {
      control: (provided) => ({
         ...provided,
         position: 'relative',
         width: '144px',
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
   function updateFilterHandler(option) {
      setFilterStatus(option);
      dispatch(updateFilterStatus(option));
   }


   return (
      <div className={styles.header}>
         <SelectButton id='status' defaultValue={options[0]} options={options}
                       styles={customStyles}
                       value={filterStatus}
                       onChange={option => updateFilterHandler(option)}/>
         <Button variant='primary' onClick={() => setModalOpen(true)}>
            Add ToDo
         </Button>
         <TodoModal type='add' modalOpen={modalOpen}
                    setModalOpen={setModalOpen}/>
      </div>

   );
}