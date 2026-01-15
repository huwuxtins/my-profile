package com.my_profile.chat_service.mapper;

import com.my_profile.chat_service.entity.Message;
import com.my_profile.chat_service.mapper.dto.MessageDto;

public interface MessageMapper extends BaseMapper<MessageDto, Message>{
    MessageDto toDto(Message message);
    Message toEntity(MessageDto dto);
}
