import React, { useEffect, useState } from 'react';
import EmployeeService from '../Service/EmployeeService';



const ListOfEmp = () => {

const[employee,setEmployee]=useState([]);

useEffect(()=>{

    EmployeeService.getAllEmployes().then((response)=>{

        setEmployee(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    });
}
,[])




  return (
    <div className='container'>

        <h2 className='text-center'>List Of Employees</h2>
      <table className='table table-bordered table-striped'>
<thead>
    <th>Employee Id</th>
    <th>Employee First Name</th>
    <th>Employee Last Name</th>
    <th>Employee Email ID</th>

</thead>


<tbody>
{
    employee.map(employee=>

<tr key={employee.id}>
    <td>{employee.id}</td>
    <td>{employee.firstName}</td>
    <td>{employee.lastName}</td>
    <td>{employee.email}</td>
     
</tr>

)}
</tbody>
     </table>
    </div>
  )
}

export default ListOfEmp
