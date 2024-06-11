package com.my_profile.content_management_serivce.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Plan {
    @Id
    private String id;

    @Field("user_id")
    private String userID;

    @Field("created_at")
    private LocalDateTime createdAt;

    @Field("start_at")
    private LocalDateTime startAt;

    @Field("end_at")
    private LocalDateTime endAt;
    private String work;
}
