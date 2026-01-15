package com.my_profile.chat_service.mapper.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MessageDto {
    @JsonProperty("id")
    private UUID id;

    @JsonProperty("senderId")
    private String senderId;

    @JsonProperty("sender")
    private UserDto sender;

    @JsonProperty("groupId")
    private String groupId;

    @JsonProperty("content")
    private String content;

    @JsonProperty("createdAt")
    private Instant createdAt;

    @JsonProperty("editedAt")
    private Instant editedAt;

    @JsonProperty("deletedAt")
    private Instant deletedAt;

    @JsonProperty("isSystem")
    private boolean system;
}
