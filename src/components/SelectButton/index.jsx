import Select from 'react-select';

export default function SelectButton({children, options, styles, value, id, ...rest}) {


   return (
      <Select options={options} styles={styles} value={value} id={id} {...rest} >
         {children}
      </Select>
   );
}