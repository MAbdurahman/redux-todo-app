import styles from './SelectButton.module.css'

export default function SelectButton() {

   return (
      <form>
         <p>
            {/*<label htmlFor="pet-select">Filter Todos:</label>*/}
            <select id="pet-select">
               <button>
                  <selectedcontent></selectedcontent>
               </button>
               <option value="cat">
        <span className="option-label">All Todos</span>
               </option>
               <option value="dog">
        <span className="option-label">Completed</span>
               </option>
               <option value="hamster">
        <span className="option-label">Incomplete</span>
               </option>
            </select>
         </p>
      </form>

   );
}