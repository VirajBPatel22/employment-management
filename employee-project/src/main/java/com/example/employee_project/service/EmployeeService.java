package com.example.employee_project.service;

import java.util.List;

import com.example.employee_project.model.Employee;

public interface EmployeeService {
     String createEmployee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
    String updateEmployee(Long id, Employee employee);
    Employee readEmployee(Long id);

    
} 