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

    @Field("created_at")
    private Date createdAt;

    @Field("updated_at")
    private Date updatedAt;
    private String content;

    @Field("user_ids")
    private List<String> userIds;
}
