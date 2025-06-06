import React, { useEffect ,useState } from 'react'
import {useNavigate} from "react-router-dom";   
import EmployeeService from '../service/EmployeeService';
function Employeelist() {
    const[loading,setLoading ]=useState(true);
     const[employees,setEmployees]=useState(null);
     useEffect(() =>{
             const fetchData = async () =>{
                 setLoading(true);
                 try{
                     const response = await EmployeeService.getEmployees();
                     setEmployees(response.data);
                 }catch(error){
                     console.log(error);
                 }
                 setLoading(false)
             };
             fetchData();
         }, []);
        const deleteEmployee = (e,id)=>{
            e.preventDefault();
            EmployeeService.deleteEmployeeById(id)
            .then (()=>{
                if(employees){
                    setEmployees((prevElenment)=>{
                        return prevElenment.filter((employee)=>employee.id !== id);

                    })
                }
            })
        }
        const editEmployee=(e,id)=>{
            e.preventDefault();
            navigate(`/editEmployee/${id}`) 
        }
    const navigate = useNavigate();

  return (
    <>
     <div>
      <button onClick={()=>navigate("/addemployee")}> Add Employee </button>
    </div>
    <div>
      <table>
        <thead>
            <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Action</th>
            </tr>
        </thead>
        {!loading && (
        <tbody>
            {employees.map((employee)=>(

              <tr key={employee.id}>
            <td>{employee.name}</td>
            <td>{employee.phone}</td>
            <td>{employee.email}</td>
            <td>
                {/* <button> */}
                <a onClick={(e,id)=>editEmployee(e,employee.id)}><button>Edit</button></a>

                {/* </button>  */}
                <a onClick={(e,id)=>deleteEmployee(e,employee.id)}><button>Delete</button></a></td>
          </tr>
        ))}
        </tbody>
        )}
      </table>
    </div>
    </>
  )
}

export default Employeelist     