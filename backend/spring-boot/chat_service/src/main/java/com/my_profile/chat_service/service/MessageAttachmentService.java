package com.my_profile.chat_service.service;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.dto.MessageAttachmentDto;

import java.util.List;
import java.util.UUID;

public interface MessageAttachmentService {
    MessageAttachmentDto findById(UUID id);
    List<MessageAttachmentDto> findByMessageId(UUID messageId);
    MessageAttachmentDto addAttachment(MessageAttachmentDto dto) throws AccessDbException;
    MessageAttachmentDto updateAttachment(UUID id, MessageAttachmentDto dto) throws AccessDbException;
    void deleteAttachment(UUID id) throws AccessDbException;
}
