
import styles from './PageTitle.module.css';


export default function PageTitle({ children, ...rest }) {

   return (
      <h1 className={styles.title} {...rest}>
         {children}
      </h1>

   );
}