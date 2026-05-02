import Select from 'react-select/base';
import styles from './SelectButton.module.css'

export default function SelectButton({ children, id, ...rest }) {

   const customStyles = {
      control: (provided) => ({...provided, position: 'relative', width: '150px', borderRadius: '5px', boxShadow: 'none', textAlign: 'left'}),
      options: (provided) => ({...provided, color: state.isSelected ? 'white' : 'black',
      backgroundColor: state.isSelected ? 'black' : 'white'})
   }

   return (
    <Select options={customStyles.options} style={customStyles.control} id={id} {...rest}>
       {children}
    </Select>
   );
}