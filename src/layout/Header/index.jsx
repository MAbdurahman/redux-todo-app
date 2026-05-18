import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Button from '../../components/Button/index.jsx';
import SelectButton from '../../components/SelectButton/index.jsx';
import TodoModal from '../../components/TodoModal/index.jsx';
import {updateFilterStatus} from '../../store/features/todoSlice.jsx';
import styles from './Header.module.scss';


export default function Header() {
   /************************* variables *************************/
   const [modalOpen, setModalOpen] = useState(false);
   const initialFilterStatus = useSelector(state => state.todo.filterStatus);
   const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
   const dispatch = useDispatch();

   const options = [
      {value: 'all', label: 'All ToDos'},
      {value: 'complete', label: 'Completed'},
      {value: 'incomplete', label: 'Incomplete'}
   ];

   /************************* functions *************************/
   const updateFilterHandler = (filterStatus) => {
      setFilterStatus(filterStatus.value);
      dispatch(updateFilterStatus(filterStatus.value));
   }

   return (
      <div className={styles.header}>
         <SelectButton id='status' value={filterStatus.value} options={options} onChange={updateFilterHandler} />

         <Button variant='primary' onClick={() => setModalOpen(true)}>
            Add ToDo
         </Button>
         <TodoModal type='add' modalOpen={modalOpen}
                    setModalOpen={setModalOpen}/>
      </div>

   );
}