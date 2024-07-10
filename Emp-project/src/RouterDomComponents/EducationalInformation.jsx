import React from 'react'
import { useSelector } from 'react-redux'
import RouterTitle from '../components/RouterTitle'

function EducationalInformation() {
  const searchResults=useSelector((state)=>state.employee.searchResults)
  return (
    
    <div>
      
      {searchResults && searchResults.map((employee) => (
        
         <div key={employee.id}> 
         <RouterTitle/>
         <div>
                     <p>Eğitim Durumu:</p> <input type="text" value={employee.educational_background} />
                     <p>Departman:</p> <input type="text" value={employee.department} />
                     <p>Pozisyonu:</p> <input type="text" value={employee.working_position} />
                     </div>
         </div>


        ))}
      
    </div>
  )
}

export default EducationalInformation
