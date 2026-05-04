import Select from 'react-select';


export default function SelectButton({children, id, ...rest}) {

   const options = [
      {value: 'all', label: 'All ToDos'},
      {value: 'completed', label: 'Completed'},
      {value: 'incomplete', label: 'Incomplete'}
   ];

   const customStyles = {
      control: (provided, state) => ({
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
         cursor: 'pointer'
      }),
      option: (provided, state) => ({
         ...provided,  '&:hover': {
            color: '#fafafa', // Change the color on hover
         },
         backgroundColor: state.isFocused ? '#7a7a7a' : '#949494',
         textAlign: 'left',
         fontSize: '1.6rem',
         fontWeight: 800,
         border: '1px solid #fafafa',
         borderRadius: '5px',
         cursor: 'pointer'
      }),
      menu: (provided) => ({
         ...provided,
         zIndex: 100,
         padding: 0,
      }),
      menuList: base => ({
         ...base,
         // kill the white space on first and last option
         padding: 0
      })

   };

   return (
      <Select  classNames={{
         option: ({ isFocused, isSelected }) =>
            isFocused ? 'option--focused' :
               isSelected ? 'option--selected' : ''
      }} defaultValue={options[0]} options={options} styles={customStyles} id={id} {...rest} >
         {children}
      </Select>
   );
}