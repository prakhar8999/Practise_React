import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [employeeData, setemployeeData] = useState([])
  const [employeeName,setEmployeeName] = useState('')

  const EmployeeNameSearch = (e) => {
    setEmployeeName(e.target.value)

  }

  useEffect(() => {
    fetch('https://mocki.io/v1/b543fcfa-4dcf-4f65-84fc-8e9e1c2c8aeb')
    .then(response => response.json())
    .then(edata => setemployeeData(edata.data))
},[])

  return (
    <>
    <input type='text' value={employeeName} 
    onChange={EmployeeNameSearch}/>
      {/* <ul>
        {employeeData.map((employee) => (
          <li key={employee.id}>{employee.firstName}</li>
        ))}
      </ul> */}
      <ul>
        {(employeeData.filter((employee) =>
        employee.firstName.includes(employeeName) || employee.lastName.includes(employeeName))).map((data) => (<li key={data.id}>{data.firstName}</li>))}
      </ul>
    </>
  )
}

export default App