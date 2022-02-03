import React,{useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import './SearchFilter.css';

 function SearchFilter({placeholder,data}) {
    const [filteredData, setFilteredData] = useState([]);
     const [enterWord, setenterWord] = useState('');

     console.log("placeholder",placeholder);
     console.log("data",data)

     const handleFilteredData=(e)=>{
         const searchWord= e.target.value;
         setenterWord(searchWord)

         const newFilteredData = data.filter(value=>{
             return value.title.toLowerCase().includes(searchWord.toLowerCase())
         })
         if(enterWord !=''){
            setFilteredData(newFilteredData )
         }
         else{
            setFilteredData([])
         }
         
     }
    const handleClearInputField= ()=>{
        setFilteredData([]);
        setenterWord('')
     }
  return(  <div className="search">
    <div className="searchInputs">
        <input type="text"placeholder={placeholder} value={enterWord} onChange={handleFilteredData}/>
        <div className='searchIcon'>
            {enterWord ===''?
                <SearchIcon />
                :<CloseIcon id="clearBtn" onClick={handleClearInputField}  />}
            </div>
            </div>
          {enterWord.length>0 &&   <div className='dataResult'>
                {filteredData.slice(0,15).map((data)=>{
                    return(
                        <p><a className='dataItem' target="_blank" href={data.link}>{data.title}</a></p>
                    )
                })}
            </div>}
  </div>);
}
export default SearchFilter;