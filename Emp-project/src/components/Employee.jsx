// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch} from 'react-redux';
import { getAllEmployees } from '../redux/employeeSlice';
import '../css/EmployeeTitle.css'

function Employee() {
  
  const [newSearch,setNewSearch]=useState('')

  const dispatch=useDispatch();

  const handleSearchedEmployee = ()=>{
   if(newSearch.trim().length===0){
      alert('Tc Kimlik numarası giriniz')
      return; 
   } else if( newSearch.trim().length!=11){
    alert('Tc kimlik numarası eksik veya hatalı')
    return;
   }
    dispatch(getAllEmployees(newSearch))
    setNewSearch('')  
  }


  return (
  <div className='Container'>
        <div className='EmployeeSearch-Tittle'>
            <h1>Çalışan Ara</h1>
        </div>
        <div className='EmployeeSearch-Btn&İnput'>
            <input className='EmployeeSearch-input' value={newSearch}
            onChange={(e)=>setNewSearch(e.target.value)}
            type="text" 
            placeholder='TC Kimlik Numarası giriniz...' />
            <button className='EmployeeSearch-Button'
            onClick={handleSearchedEmployee}
            >Ara</button>    
        </div>
    </div>
    
  )
}


export default Employee
