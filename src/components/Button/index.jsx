
import styles from './Button.module.css';

const buttonTypes = {
   primary: 'Primary',
   secondary: 'Secondary',
};

export default function Button({ type, variant, children, ...rest }){
   return (
      <button type={type === 'submit' ? 'submit' : 'button'}
         className={`${styles.button} ${styles[variant]}`}{...rest} >
         {children}
      </button>
   );
}