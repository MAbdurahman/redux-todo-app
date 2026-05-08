
import styles from './PageTitle.module.scss';


export default function PageTitle({ children, ...rest }) {

   return (
      <h1 className={styles.title} {...rest}>
         {children}
      </h1>

   );
}