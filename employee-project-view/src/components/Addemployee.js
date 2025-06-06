    import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom';
    import EmployeeService from '../service/EmployeeService';    


    function Addemployee() {
        const[employee,setEmployee]=useState({
            id:"",
            name:"",
            phone:"",
            email:"",
        })
        const handleChange=(e) =>{
            const value =e.target.value;
            setEmployee({...employee,[e.target.name]:value})
        }
        const saveEmployee=(e)=>{
            e.preventDefault();   
            EmployeeService.saveEmployee(employee)
            .then((Response)=>{ 
                console.log("saved",Response);
                Navigate('/');
            })
            .catch((error)=>{
                console.log(error);
            })
            ; 
        
        }
        const reset=(e)=>{
            e.preventDefault();     
            setEmployee({
            id:"",
            name:"",
            phone:"",
            email:"",
            });
        }
        const Navigate = useNavigate();
    return (
          <div className="container">
            <div className="card fade-in">
                <div className="card-header">
                    <h1>Add New Employee</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={saveEmployee}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type='text'
                                name='name'
                                placeholder="Enter employee name"
                                value={employee.name}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                placeholder="Enter phone number"
                                value={employee.phone}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type='email'
                                name="email"
                                placeholder="Enter email address"
                                value={employee.email}
                                onChange={handleChange}
                                className="form-input"
                                required
                            />
                        </div>

                        <div className="btn-group">
                            <button 
                                type="submit" 
                                className="btn btn-success"
                    
                            >
                                Save
                      
                            </button>
                            <button 
                                type="button" 
                                onClick={reset} 
                                className="btn btn-warning"
                            >
                                Clear Form
                            </button>
                            <button
                                type="button"
                                onClick={() => Navigate("/")}
                                className="btn btn-secondary"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    )
    }

    export default Addemployee