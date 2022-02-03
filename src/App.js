import React from 'react';
import './App.css';
import dataJson from './data.json';
import SearchFilter from './Components/SearchFilter'

function App() {
  return (
    <div className="App">
     <SearchFilter placeholder="search your item here" data={dataJson}/>
    </div>
  );
}

export default App;
