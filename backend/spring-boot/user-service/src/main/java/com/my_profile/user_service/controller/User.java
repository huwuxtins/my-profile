package com.my_profile.user_service.controller;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;
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

    @Field("userID")
    private String userID;
    private String name;

    @Field("firstName")
    private String firstName;

    @Field("lastName")
    private String lastName;
    private String email;

    @Field("phoneNumber")
    private String phoneNumber;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String avatar;
    private Date bod;

    @Field("registeredAt")
    private Date registeredAt;
    private String major;
    private String description;
}
