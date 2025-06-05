package com.example.employee_project.model;

import lombok.Data;

@Data  // @data are generate the getter and setter automatically;
public class Employee {
    private Long id;
    private String name;
        private String phone;
        private String email;
        
}
