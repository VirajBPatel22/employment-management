package com.example.employee_project.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.example.employee_project.entity.EmployeeEntity;
import com.example.employee_project.model.Employee;
import com.example.employee_project.repository.EmployeeRepository;

@Service
public class EmployeeServiceImp implements EmployeeService {
    private EmployeeRepository employeeRepository;
    List<Employee> employees = new ArrayList<>();

    
    @Override
    public String createEmployee(Employee employee) {
   EmployeeEntity employeeEntity = new EmployeeEntity();
        BeanUtils.copyProperties(employee, employeeEntity);

        employeeRepository.save(employeeEntity);
       // employees.add(employee);
        return "Saved Successfully";
    }

    @Override
    public List<Employee> readEmployees() {
         List<EmployeeEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees= new ArrayList<>();
   //    for(int i=0;i<employeesList.size();i++){
        for (EmployeeEntity employeeEntity : employeesList) {
            
            Employee emp = new Employee();
            emp.setId(employeeEntity.getId());
            emp.setName(employeeEntity.getName());
            emp.setEmail(employeeEntity.getEmail());
            emp.setPhone(employeeEntity.getPhone());
          
            employees.add(emp);
        }
        return employees;     
    }
    @Override
    public boolean deleteEmployee(Long id) {
        // EmployeeEntity emp = employeeRepository.findById(id).get();
        employees.removeIf(emp -> emp.getId().equals(id));
        return true;
    }


    @Override
    public String updateEmployee(Long id, Employee employee) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updateEmployee'");
    }

    @Override
    public Employee readEmployee(Long id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'readEmployee'");
    }

}
