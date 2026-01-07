package com.my_profile.content_management_serivce.model;

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

