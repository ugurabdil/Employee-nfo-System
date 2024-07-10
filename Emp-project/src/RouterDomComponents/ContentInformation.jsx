import React from 'react'
import { useSelector } from 'react-redux'
import RouterTitle from '../components/RouterTitle'

function ContentInformation() {
  const searchResults=useSelector((state)=>state.employee.searchResults)
  return (
    
    <div>
      
      {searchResults && searchResults.map((employee) => (
        
         <div key={employee.id}> 
         <RouterTitle/>
         <div>
                    <p>Medeni Durumu:</p> <input type="text" value={employee.marital_status} />
                     <p>Cinsiyet:</p> <input type="text" value={employee.gender} />
                    <p>Telefon Numarası:</p> <input type="text" value={employee.phone} />
                     <p>Adres:</p> <input type="text" value={employee.address} />
                     <p>E-posta Adresi:</p> <input type="text" value={employee.e_posta} />
                     </div>

                  </div>           

        ))}
      
    </div>
  )
}

export default ContentInformation
