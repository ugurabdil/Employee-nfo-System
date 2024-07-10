// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react'
import '../css/EmployeeSearch.css';
import { useDispatch, useSelector } from 'react-redux';


import Employe from './Employe';
import { getAllEmployees } from '../redux/employeeSlice';

function EmployeeSearch() {
  const dispatch=useDispatch()
  const {employees}=useSelector((store)=>store.employee)
 console.log({employees})
  
  useEffect(()=>{
    dispatch(getAllEmployees())
  },[])
  return ( 
    <div>
     {
      
      employees && employees.map((employe)=>(
        <Employe key={employe.id} employe={employe}/>

      ))
     }
    </div >  
  )
}

export default EmployeeSearch