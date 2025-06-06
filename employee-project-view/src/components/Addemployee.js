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
        <div>
            <div>
            <h1>Addemployee</h1>
            </div>
            <div>

            <input type='text' name='name' placeholder ="Enter name " value={employee.name} onChange={(e)=>handleChange(e)}></input>
            <br></br>
            <br></br>
            <input type="number" name = "phone" placeholder ="Enter Phone " value={employee.phone} onChange={(e)=>handleChange(e)}></input>
            <br></br>
            <br></br>
            <input type='email' name = "email" placeholder ="Enter Email " value={employee.email} onChange={(e)=>handleChange(e)}></input>
            <br></br>
            <br></br>
            </div>
            <div>
            <button onClick={saveEmployee}>Save</button>
            <button onClick = {reset}>Clear</button>
            <button 
            onClick={()=>Navigate("/")}
            >Cancel</button>
            </div>
        </div>
        
    )
    }

    export default Addemployee