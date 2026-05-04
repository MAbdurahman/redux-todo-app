
import Button from '../../components/Button/index.jsx';
import SelectButton from '../../components/SelectButton/index.jsx';
import styles from './Header.module.css';

export default function Header() {

   return (
      <div className={styles.header}>
         <SelectButton>
            <option value='all' >All ToDos</option>
            <option value='completed'>Completed</option>
            <option value='incomplete'>Incomplete</option>
         </SelectButton>
         <Button variant='primary'>
            Add ToDo
         </Button>
      </div>

   );
}