import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../service/EmployeeService";

function Updateemployee() {
  const {id} = useParams();

  const [employee, setEmployee] = useState({
    id: id,
    name: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }

    };
    fetchData();
  }, []);
  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };
  const Updateemployee = (e) => {
    e.preventDefault();
    console.log("in update ");
    EmployeeService.updateEmployeeById(employee, id)
      .then((Response) => {
        console.log("saved", Response);
        Navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Navigate = useNavigate();
  return (
        <div className="container">
            <div className="card fade-in">
                <div className="card-header">
                    <h1>Update Employee</h1>
                </div>
                <div className="card-body">
                    <form onSubmit={Updateemployee}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
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
                                type="email"
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
                                Update
                      
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
    );
}

export default Updateemployee;