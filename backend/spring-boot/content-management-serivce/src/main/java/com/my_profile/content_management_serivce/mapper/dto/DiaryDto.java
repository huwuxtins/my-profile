package com.my_profile.content_management_serivce.mapper.dto;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class DiaryDto {
    @JsonProperty("id")
    private UUID id;

    @JsonProperty("userId")
    private UUID userId;
    
    @JsonProperty("author")
    private UserDto author;

    @JsonProperty("createdAt")
    private LocalDateTime createdAt;

    @JsonProperty("updatedAt")
    private LocalDateTime updatedAt;

    @JsonProperty("images")
    private List<String> images;
    
    @JsonProperty("content")
    private String content;
}
