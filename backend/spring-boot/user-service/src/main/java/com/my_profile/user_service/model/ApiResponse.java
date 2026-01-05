package com.my_profile.user_service.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
@Setter
public class ApiResponse<E> {
    
    private String message;
    private E data;
}
