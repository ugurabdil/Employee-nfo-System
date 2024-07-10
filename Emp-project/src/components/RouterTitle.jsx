// eslint-disable-next-line no-unused-vars
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { IoCheckmark } from "react-icons/io5";
import '../css/EmployeeSearch.css';
import { Link } from 'react-router-dom';
function RouterTitle() {
  return (
    <div>
       <div>
               <h1>Bulunan Çalışan </h1>
                <div className='link-dv'>
                  <div>
                  <Link className='Link' to='/PersonalInformation'>Kişisel Bilgiler</Link>
                  <Link className='Link' to='/EducationalInformation'>Eğitim Bilgileri</Link>
                  <Link className='Link' to='/ContentInformation'>İletişim Bilgileri</Link>
                  </div>
                  <div className='icon-dv'>
                  <CiEdit className='icon'/>
                  <IoCheckmark className='icon'/>
                  <CiTrash className='icon'/>
                  </div>
               </div>
            </div>
    </div>
  )
}

export default RouterTitle
