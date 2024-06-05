package com.my_profile.user_service.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @GetMapping("")
    public ResponseEntity<Object> getUser(@RequestParam String param) {
        return new ResponseEntity<Object>(HttpStatus.OK);
    }
    
    @PostMapping("/registration")
    public ResponseEntity<Object> addUser(@RequestBody Map<String, Object> map){
        String email = map.get("email").toString();

        System.out.println("Email: " + email);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
