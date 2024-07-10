import { useState } from 'react'
import './App.css'
import Table from './component/Table'
import Sideform from './component/Sideform'
import { Routes,Route } from 'react-router-dom';
import Edit from './component/Edit';
import Home from './component/Home';


function App() {
  

  return ( 
    <>
  
    
      
        <Routes>

<Route path = "/" element = {<div><Home/></div>} />
<Route path = "edit" element = {<div><Edit/></div>} />

</Routes>
    

    
  
    </>
  )
}

export default App
