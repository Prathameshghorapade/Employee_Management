package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Employee;
import com.example.demo.Repository.EmpRepository;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/emp")
public class EmployeeController {

    @Autowired
    private EmpRepository empRepository;

    @GetMapping
    public List<Employee> getAllEmp(){

        return empRepository.findAll();
    }

    @PostMapping("/add")

    public Employee addEmployee(@RequestBody Employee employee){
        return empRepository.save(employee);
    }

}
