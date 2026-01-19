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
import java.util.UUID;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Plan {
    @Id
    private UUID id;

    @Field("user_id")
    private UUID userId;

    @Field("created_at")
    private LocalDateTime createdAt;

    @Field("updated_at")
    private LocalDateTime updatedAt;

    @Field("start_at")
    private LocalDateTime startAt;

    @Field("end_at")
    private LocalDateTime endAt;

    @Field("images")
    private List<String> images;
    
    private String content;
}
