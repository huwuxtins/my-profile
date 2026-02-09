package com.my_profile.chat_service.socket;

import com.corundumstudio.socketio.SocketIOClient;
import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.dto.MessageDto;
import com.my_profile.chat_service.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@SuppressWarnings("unused")
public class SocketServiceImpl implements SocketService{
    private final MessageService messageService;

    public void sendSocketMessage(SocketIOClient sender, MessageDto dto, String room) {
        for(SocketIOClient client: sender.getNamespace().getRoomOperations(room).getClients()) {
            if(!client.getSessionId().equals(sender.getSessionId())) {
                client.sendEvent("read_message", dto);
            }
        }
    }

    public void saveMessage(SocketIOClient sender, MessageDto dto) throws AccessDbException {
        MessageDto addedMessage = this.messageService.addMessage(dto);
        sendSocketMessage(sender, addedMessage, addedMessage.getGroupId().toString());
    }
}
