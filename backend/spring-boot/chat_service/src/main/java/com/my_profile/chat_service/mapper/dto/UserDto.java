package com.my_profile.chat_service.mapper.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.Map;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
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
