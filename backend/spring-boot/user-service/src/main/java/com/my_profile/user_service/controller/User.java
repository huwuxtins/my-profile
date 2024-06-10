package com.my_profile.user_service.controller;

import java.util.Date;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    @Id
    private String id;

    @Field("user_id")
    private String userID;
    private String name;
    private String email;

    @Field("phone_number")
    private String phoneNumber;
    private String avatar;
    private Date bod;

    @Field("register_at")
    private Date registerAt;
    private String major;
}
