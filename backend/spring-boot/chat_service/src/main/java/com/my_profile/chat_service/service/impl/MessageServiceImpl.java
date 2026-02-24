package com.my_profile.chat_service.service.impl;

import com.my_profile.chat_service.entity.Message;
import com.my_profile.chat_service.entity.MessageAttachment;
import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.ResourceNotFoundException;
import com.my_profile.chat_service.mapper.MessageAttachmentMapper;
import com.my_profile.chat_service.mapper.MessageMapper;
import com.my_profile.chat_service.mapper.dto.MessageAttachmentDto;
import com.my_profile.chat_service.mapper.dto.MessageDto;
import com.my_profile.chat_service.repository.MessageRepository;
import com.my_profile.chat_service.service.MessageAttachmentService;
import com.my_profile.chat_service.service.MessageService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@SuppressWarnings("unused")
public class MessageServiceImpl implements MessageService {

    private final MessageRepository messageRepository;
    private final MessageAttachmentService attachmentService;
    private final MessageMapper messageMapper;
    private final MessageAttachmentMapper attachmentMapper;

    public MessageServiceImpl(MessageRepository messageRepository, MessageAttachmentService attachmentService, MessageMapper messageMapper, MessageAttachmentMapper attachmentMapper) {
        this.messageRepository = messageRepository;
        this.attachmentService = attachmentService;
        this.messageMapper = messageMapper;
        this.attachmentMapper = attachmentMapper;
    }

    @Override
    public MessageDto findById(UUID id) {
        Optional<Message> optionalMessage = this.messageRepository.findById(id);
        if(optionalMessage.isPresent()) {
            return this.messageMapper.toDto(optionalMessage.get());
        }
        throw new ResourceNotFoundException("This message isn't exist!");
    }

    @Override
    public List<MessageDto> findByGroupId(UUID groupId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return this.messageRepository.findByGroupId(groupId, pageable)
                .getContent()
                .stream()
                .map(this.messageMapper::toDto)
                .toList();
    }

    @Override
    public MessageDto addMessage(MessageDto dto) throws AccessDbException{
        try {
            Message message = this.messageMapper.toEntity(dto);
//            this.attachmentService.
            return this.messageMapper.toDto(this.messageRepository.save(message));
        } catch(Exception e) {
            throw new AccessDbException("Add message failed!");
        }
    }

    @Override
    public MessageDto updateMessage(UUID id, MessageDto dto) throws AccessDbException {
        Optional<Message> optionalMessage = this.messageRepository.findById(id);
        if(optionalMessage.isPresent()) {
            Message presentMessage = optionalMessage.get();
            presentMessage.setContent(dto.getContent());
            try {
                return this.messageMapper.toDto(this.messageRepository.save(presentMessage));
            } catch (Exception e) {
                throw new AccessDbException("Update message failed!");
            }
        }
        throw new ResourceNotFoundException("This message isn't exist!");
    }

    @Override
    public MessageDto deleteMessage(UUID id) throws AccessDbException {
        Message message = this.messageRepository.findById(id).orElse(null);
        if(message != null) {
            try {
                this.messageRepository.delete(message);
                return this.messageMapper.toDto(message);
            } catch (Exception e) {
                throw new AccessDbException("Delete message failed!");
            }
        }
        throw new ResourceNotFoundException("This message isn't exist!");
    }
}
