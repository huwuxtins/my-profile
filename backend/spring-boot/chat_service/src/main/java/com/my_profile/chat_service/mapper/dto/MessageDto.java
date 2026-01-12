package com.my_profile.chat_service.mapper.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

@Data
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
