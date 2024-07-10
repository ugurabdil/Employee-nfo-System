import React from 'react'
import { useSelector } from 'react-redux'
import RouterTitle from '../components/RouterTitle'

function PersonalInformation() {
  const searchResults=useSelector((state)=>state.employee.searchResults)
  return (
    
    <div>
      
      {searchResults && searchResults.map((employee) => (
        
         <div key={employee.id}> 
         <RouterTitle/>
                              <p>TC Kimlik Numarası: </p><input type="text" value={employee.Tckn} />
                             <p>Ad:</p> <input type="text" value={employee.firstname} />
                             <p>Soyad:</p> <input type="text" value={employee.lastname} />
                            <p>Doğum Tarihi: </p> <input type="text" value={employee.date_of_birth} />
                             <p>Yaş:</p> <input type="text" value={employee.age} />
                            </div>


        ))}
      
    </div>
  )
}

export default PersonalInformation
