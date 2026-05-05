import Select from 'react-select';

export default function SelectButton({children, id, ...rest}) {

   const options = [
      {value: 'all', label: 'All ToDos'},
      {value: 'completed', label: 'Completed'},
      {value: 'incomplete', label: 'Incomplete'}
   ];

   const customStyles = {
      control: (provided) => ({
         ...provided,
         position: 'relative',
         width: '144px',
         textAlign: 'left',
         fontSize: '1.6rem',
         fontWeight: 800,
         background: '#7a7a7a',
         borderRadius: '5px',
         border: 'none',
         boxShadow: 'none',
         cursor: 'pointer'
      }),
      singleValue: (provided, state) => ({
         ...provided,
         color: state.isSelected ? '#fafafa' : '#2e2e2e'
      }),
      option: (provided, state) => ({
         ...provided,  '&:hover': {
            color: '#fafafa', // Change the color on hover
         },
         background: state.isFocused ? '#7a7a7a' : '#949494',
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
      <Select defaultValue={options[0]} options={options} styles={customStyles} id={id} {...rest} >
         {children}
      </Select>
   );
}