package com.my_profile.chat_service.mapper;

import com.my_profile.chat_service.entity.MessageAttachment;
import com.my_profile.chat_service.mapper.dto.MessageAttachmentDto;

public interface MessageAttachmentMapper extends BaseMapper<MessageAttachmentDto, MessageAttachment>{
    MessageAttachmentDto toDto(MessageAttachment attachment);
    MessageAttachment toEntity(MessageAttachmentDto dto);
}
