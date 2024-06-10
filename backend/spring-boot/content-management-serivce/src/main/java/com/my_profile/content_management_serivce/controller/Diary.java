package com.my_profile.content_management_serivce.controller;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Diary {
    @Id
    private String id;

    @Field("user_id")
    private String userID;

    @Field("created_at")
    private Date createdAt;
    private String image;
    private String video;
    private String content;
}
