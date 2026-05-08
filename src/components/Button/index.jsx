
import {getClasses} from '../../assets/utils/functionsUtils.js';
import styles from './Button.module.scss';

const buttonTypes = {
   primary: 'primary',
   secondary: 'secondary',
};

export default function Button({ type, variant = 'primary', children, ...rest }){
   return (
      <button
         type={type === 'submit' ? 'submit' : 'button'}
         className={getClasses([styles.button,
            styles[`button--${buttonTypes[variant]}`],
         ])}
         {...rest}
      >
         {children}
      </button>
   );
}