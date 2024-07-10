import { createSlice } from '@reduxjs/toolkit'
import {employeeData} from '../Data/employeeData'

const initialState = {
    employeeData,
        
}

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    getAllEmployees: (state, action) => {
      state.employeeData = [...state.employeeData.filter((employee)=>employee.Tckn==action.payload)];
    },
  },
})


export const {getAllEmployees} = employeeSlice.actions

export default employeeSlice.reducer