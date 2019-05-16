package com.humbo.humbo2.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins={ "http://localhost:8080", "http://localhost:8888" })
public class BasicAuthController {

    @GetMapping(path = "/basicauth")
    public String helloWorldBean() {
        //throw new RuntimeException("Some Error has Happened! Contact Support at ***-***");
        return "You are authenticated";
    }   
}