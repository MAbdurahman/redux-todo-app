
import {getClasses} from '../../assets/utils/functionsUtils.js';
import styles from './ModalSelectButton.module.scss';


export default function ModalSelectButton({ children, id, ...rest }) {

   return (
      <select id={id}
              className={getClasses([styles.button, styles.button__select])}
              {...rest} >
         {children}
      </select>
   );
}