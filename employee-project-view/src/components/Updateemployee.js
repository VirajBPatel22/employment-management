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
    <div>
      <div>
        <h1>update employee</h1>
      </div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter name "
          value={employee.name}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <br></br>
        <input
          type="number"
          name="phone"
          placeholder="Enter Phone "
          value={employee.phone}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="Enter Email "
          value={employee.email}
          onChange={(e) => handleChange(e)}
        ></input>
        <br></br>
        <br></br>
      </div>
      <div>
        <button onClick={Updateemployee}>Update</button>
        <button onClick={() => Navigate("/")}>Cancel</button>
      </div>
    </div>
  );
}

export default Updateemployee;
