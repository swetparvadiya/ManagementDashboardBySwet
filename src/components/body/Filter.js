import Reac, {useState} from "react";
import styles from "./Filer.module.css";
import DatePicker from 'react-date-picker';

const Filter = () => {
    const getInitialState = () => {
        const value = "Orange";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

      const [datechange, onDateChange] = useState(new Date());
        


  return (
    <div>
     <div className={styles.main}>
      <select  className={styles.filter} value={value} onChange={handleChange}>
      <option value="All task">All task</option>        
        <option value="Completed task">Completed task</option>
        <option value="On progress task">On progress task</option>
        <option value="Started task">Started task</option>
      </select>
      {/* <p>{`You selected ${value}`}</p> */}
      <DatePicker onChange={onDateChange} className={styles.filter} value={datechange} />
    </div>
     </div>
  );
};

export default Filter;
