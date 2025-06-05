package com.example.employee_project.controller;

    import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.employee_project.model.Employee;
import com.example.employee_project.service.EmployeeService;

@RestController
public class EmpController {
    // EmployeeService employeeService = new EmployeeServiceImp();
    @Autowired
    EmployeeService employeeService;

    @GetMapping("employees")
    public List<Employee> getAllEmployees() {  
        return employeeService.readEmployees();
    }
    
    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    } 
    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        if(employeeService.deleteEmployee(id))
            return"deleted succesfully";
        return "Not found";

    }
}