package com.my_profile.chat_service.socket.component;

import lombok.*;

import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class JoiningRoomComponent {
    private UUID groupId;
    private UUID userId;
}
