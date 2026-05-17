
import {getClasses} from '../../assets/utils/functionsUtils.js';
import styles from './SelectButton.module.scss';
import Select from 'react-select';

const customStyles = {
   control: (provided) => ({
      ...provided,
      position: 'relative',
      width: '144px',
      textAlign: 'left',
      fontSize: '1.6rem',
      fontWeight: 800,
      backgroundColor: '#7a7a7a',
      borderRadius: '5px',
      border: 'none',
      boxShadow: 'none',
   }),
   option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#7a7a7a' : '#949494',
      textAlign: 'left',
      fontSize: '1.6rem',
      fontWeight: 800,
      borderRadius: '5px',
      border: '1px solid #fafafa',
      cursor: 'pointer',
   }),
   menu: (provided) => ({
      ...provided,
      zIndex: 100,
      padding: 0
   }),
   singleValue: (provided, state) => ({
      ...provided,
      color: 'hsl(196, 0%, 88%)'
   }),
   menuList: (base) => ({
      ...base,
      //kill the white space on the first and last option
      padding: 0
   })
}

export default function SelectButton({ id, options, styles, value, onChange, ...rest }) {



   return (
      <Select defaultValue={options[0]} id={id} options={options} styles={customStyles} value={value} onChange={onChange}  rest={rest} />
   )
}