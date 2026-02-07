package com.my_profile.chat_service.socket;

import com.corundumstudio.socketio.SocketIOClient;
import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.dto.MessageDto;

public interface SocketService {
    public void sendSocketMessage(SocketIOClient sender, MessageDto dto, String room);
    public void saveMessage(SocketIOClient sender, MessageDto dto) throws AccessDbException;
}
