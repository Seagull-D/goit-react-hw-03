import s from "./SearchBox.module.css"
import { useState } from 'react';
const SearchBox = () => {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (evt) => {
        evt.preventDefault();
        setInputValue(evt.target.value);
        console.log(evt.target.value)
    }
  return (
<div>
     <div>
      <input placeholder="пошук" className={s.inputSearchIcon} type="text" name="searchInput" value={inputValue} onChange={handleChange} />
     
    </div>
              
</div>
  );
};

export default SearchBox 