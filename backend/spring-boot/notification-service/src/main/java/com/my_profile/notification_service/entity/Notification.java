package com.my_profile.notification_service.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Notification {
    @Id
    private String id;

    private String title;

    @Field("createdAt")
    private Date createdAt;

    @Field("updatedAt")
    private Date updatedAt;
    private String content;

    @Field("userIds")
    private List<String> userIds;
}
