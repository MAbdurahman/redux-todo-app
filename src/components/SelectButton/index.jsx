import Select from 'react-select';

export default function SelectButton({children, options, styles, id, ...rest}) {


   return (
      <Select defaultValue={options[0]} options={options} styles={styles} id={id} {...rest} >
         {children}
      </Select>
   );
}