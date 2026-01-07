package com.my_profile.content_management_serivce.mapper.dto;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("name")
    private String name;

    @JsonProperty("username")
    private String username;

    @JsonProperty("email")
    private String email;

    @JsonProperty("avatar")
    private String avatar;

    public static UserDto mapToUserDto(Map<String, Object> map) {
        return UserDto
                .builder()
                .id(map.get("id").toString())
                .name(map.get("name").toString())
                .username(map.get("username").toString())
                .email(map.get("email").toString())
                .avatar(map.get("avatar").toString())
                .build();
    }
}

