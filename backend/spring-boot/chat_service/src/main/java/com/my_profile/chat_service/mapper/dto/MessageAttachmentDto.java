package com.my_profile.chat_service.mapper.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
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

    public MessageAttachmentDto convertFromString(String data) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(data);

        return MessageAttachmentDto
                .builder()
                .id(UUID.fromString(jsonNode.get("id").asText()))
                .messageId(UUID.fromString(jsonNode.get("messageId").asText()))
                .fileUrl(jsonNode.get("fileUrl").asText())
                .build();
    }
}
