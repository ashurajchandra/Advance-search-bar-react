import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './SearchFilter.css';

 function SearchFilter({placeholder,data}) {
     const [enterWord, setenterWord] = useState('');
     console.log("placeholder",placeholder);
     console.log("data",data)
    const handleClearInputField= ()=>{
        setenterWord('')
     }
  return(  <div className="search">
  <div className="searchInputs">
      <input type="text"placeholder={placeholder} value={enterWord} onChange={e=>setenterWord(e.target.value)}/>
      <div className='searchIcon'>
          {enterWord ===''?
             <SearchIcon />
             :<CloseIcon id="clearBtn" onClick={handleClearInputField}  />}
   
      
      </div>
  </div>
  </div>);
}
export default SearchFilter;