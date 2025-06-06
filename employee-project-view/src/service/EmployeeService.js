import axios from 'axios';
const BASE_URL_EMPLOYEE_BACKEND = "http://localhost:8080/employees"
class EmployeeService{
    saveEmployee(employee){
        return axios.post(BASE_URL_EMPLOYEE_BACKEND,employee);
    }
    getEmployees(){
        return axios.get(BASE_URL_EMPLOYEE_BACKEND);
    }
    getEmployeeById(id){
        return axios.get(BASE_URL_EMPLOYEE_BACKEND+"/"+id);
    }
    deleteEmployeeById(id){
        return axios.delete(BASE_URL_EMPLOYEE_BACKEND+"/"+id);
    }
    updateEmployeeById(employee,id){
        return axios.put(BASE_URL_EMPLOYEE_BACKEND+"/"+id,employee);
    }

}
export default new EmployeeService();