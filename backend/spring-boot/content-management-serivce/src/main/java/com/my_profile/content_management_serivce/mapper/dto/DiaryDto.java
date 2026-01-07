package com.my_profile.content_management_serivce.mapper.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class DiaryDto {
    @JsonProperty("id")
    private String id;

    @JsonProperty("userId")
    private String userId;
    
    @JsonProperty("author")
    private UserDto auuthor;

    @JsonProperty("createdAt")
    private LocalDateTime createdAt;

    @JsonProperty("updatedAt")
    private LocalDateTime updatedAt;

    @JsonProperty("images")
    private List<String> images;
    
    @JsonProperty("content")
    private String content;
}
