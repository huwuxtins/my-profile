package com.my_profile.chat_service.mapper.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.my_profile.chat_service.enums.GroupRole;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class GroupMemberDto {
    @JsonProperty("id")
    private UUID id;

    @JsonProperty("groupId")
    private UUID groupId;

    @JsonProperty("userId")
    private UUID userId;

    @JsonProperty("role")
    private GroupRole role;

    @JsonProperty("joinedAt")
    private Instant joinedAt;
}
