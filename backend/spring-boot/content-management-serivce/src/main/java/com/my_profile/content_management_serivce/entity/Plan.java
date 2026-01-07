package com.my_profile.content_management_serivce.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.List;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Plan {
    @Id
    private String id;

    @Field("userId")
    private String userId;

    @Field("createdAt")
    private LocalDateTime createdAt;

    @Field("updatedAt")
    private LocalDateTime updatedAt;

    @Field("startAt")
    private LocalDateTime startAt;

    @Field("endAt")
    private LocalDateTime endAt;

    @Field("images")
    private List<String> images;
    
    private String content;
}
