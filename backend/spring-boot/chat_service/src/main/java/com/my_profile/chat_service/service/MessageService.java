package com.my_profile.chat_service.service;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.dto.MessageDto;

import java.util.List;
import java.util.UUID;

public interface MessageService {
    MessageDto findById(UUID id);
    List<MessageDto> findByGroupId(UUID groupId, int page, int size);
    MessageDto addMessage(MessageDto dto) throws AccessDbException;
    MessageDto updateMessage(UUID id, MessageDto dto) throws AccessDbException;
    MessageDto deleteMessage(UUID id) throws AccessDbException;
}
