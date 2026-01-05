package com.my_profile.user_service.model;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ResponseMessage {
    public static <E> ResponseEntity<ApiResponse<E>> createResponse(String message, E data, HttpStatus status){
        ApiResponse<E> response = new ApiResponse<E>(message, data);
        return new ResponseEntity<>(response, status);
    }
}
