package com.my_profile.chat_service.socket;

import com.corundumstudio.socketio.SocketIOServer;
import com.my_profile.chat_service.helper.SocketIOHelper;
import com.my_profile.chat_service.mapper.dto.MessageDto;
import com.my_profile.chat_service.service.MessageService;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@SuppressWarnings("unused")
public class SocketServer {
    private final SocketIOServer server;
    private final MessageService messageService;

    public SocketServer(SocketIOServer server, MessageService messageService) {
        this.server = server;
        this.messageService = messageService;
    }

    @PostConstruct
    public void initListeners(){
        server.addEventListener("send_message", String.class, (client, data, ackRequest) -> {
            MessageDto messageDto = MessageDto.convertFromString(data);
            MessageDto addedMessage = this.messageService.addMessage(messageDto);

            client.joinRoom(addedMessage.getGroupId().toString());
            String serializedMessage = SocketIOHelper.serialize(addedMessage);

            this.server.getRoomOperations("group" + addedMessage.getGroupId()).sendEvent("chat:receive", serializedMessage);
        });

    }
}
