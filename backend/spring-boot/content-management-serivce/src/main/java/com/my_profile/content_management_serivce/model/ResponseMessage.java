package com.my_profile.content_management_serivce.model;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public class ResponseMessage {

    public static ResponseEntity<Object> createResponse(String message, Object data, HttpStatus status){
        Map<String, Object> response = new HashMap<>();
        response.put("message", message);
        response.put("data", data);
        return new ResponseEntity<>(response, status);
    }
}
