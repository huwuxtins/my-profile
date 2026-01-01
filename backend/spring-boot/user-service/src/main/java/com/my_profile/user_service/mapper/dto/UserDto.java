package com.my_profile.user_service.mapper.dto;

import lombok.Data;

@Data
public class UserDto {
    private String userId;
    private String name;
    private String username;
    private String email;
    private String avatar;
}
