package com.my_profile.chat_service.mapper;

import com.my_profile.chat_service.entity.MessageAttachment;
import com.my_profile.chat_service.mapper.dto.MessageAttachmentDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MessageAttachmentMapper extends BaseMapper<MessageAttachmentDto, MessageAttachment>{
//    @Mapping(target = "messageId", source = "message.id")
    MessageAttachmentDto toDto(MessageAttachment attachment);

//    @Mapping(target = "id", ignore = true)
//    @Mapping(target = "createdAt", ignore = true)
//    @Mapping(target = "message", ignore = true)
    MessageAttachment toEntity(MessageAttachmentDto dto);

    List<MessageAttachmentDto> toDtoList(List<MessageAttachment> attachments);

    List<MessageAttachment> toEntityList(List<MessageAttachmentDto> dtos);
}
