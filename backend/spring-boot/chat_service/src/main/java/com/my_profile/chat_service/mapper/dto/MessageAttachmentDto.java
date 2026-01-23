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
public class MessageAttachmentDto {
    @JsonProperty("id")
    private UUID id;

    @JsonProperty("messageId")
    private UUID messageId;

    @JsonProperty("fileUrl")
    private String fileUrl;

    @JsonProperty("fileType")
    private String fileType;

    @JsonProperty("createdAt")
    private Instant createdAt;
}
