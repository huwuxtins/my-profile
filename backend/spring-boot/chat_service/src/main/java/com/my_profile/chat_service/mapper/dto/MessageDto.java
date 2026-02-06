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

    public static MessageDto convertFromString(String data) throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode jsonNode = mapper.readTree(data);

        return MessageDto.builder()
                .senderId(jsonNode.get("senderId").asText())
                .groupId(jsonNode.get("groupId").asText())
                .content(jsonNode.get("content").asText())
                .build();
    }
}
