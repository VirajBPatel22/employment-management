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
     <div className="container">
            <div className="header-actions">
                <button 
                    onClick={() => navigate("/addemployee")} 
                    className="btn btn-primary"
                >
                    Add New Employee
                </button>
            </div>

            <div className="card fade-in">
                <div className="card-header">
                    <h1>Employee Directory</h1>
                </div>
                <div className="card-body" style={{ padding: 0 }}>
                    {loading ? (
                        <div className="loading">
                            <div className="spinner"></div>
                        </div>
                    ) : employees.length === 0 ? (
                        <div className="empty-state">
                            <h3>No Employees Found</h3>
                            <p>Start by adding your first employee to the system.</p>
                            <button 
                                onClick={() => navigate("/addemployee")} 
                                className="btn btn-primary"
                                style={{ marginTop: '1rem' }}
                            >
                                Add Employee
                            </button>
                        </div>
                    ) : (
                        <div className="table-container">
                            <table className="employee-table">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {employees.map((employee) => (
                                        <tr key={employee.id}>
                                            <td>{employee.name}</td>
                                            <td>{employee.phone}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button
                                                        onClick={(e) => editEmployee(e, employee.id)}
                                                        className="btn btn-warning"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={(e) => deleteEmployee(e, employee.id)}
                                                        className="btn btn-danger"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>
  )
}

export default Employeelist     