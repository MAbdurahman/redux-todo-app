import Select from 'react-select';
import {getClasses} from '../../assets/utils/functionsUtils.js';
import styles from './SelectButton.module.scss';

export default function SelectButton({ children, id, ...rest }) {


   return (
      <select id={id}
              className={getClasses([styles.button, styles.button__select])}
              {...rest} >
         {children}
      </select>
   );
}