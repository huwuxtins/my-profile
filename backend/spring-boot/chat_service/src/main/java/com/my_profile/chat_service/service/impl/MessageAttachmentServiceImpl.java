package com.my_profile.chat_service.service.impl;

import com.my_profile.chat_service.entity.MessageAttachment;
import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.ResourceNotFoundException;
import com.my_profile.chat_service.mapper.MessageAttachmentMapper;
import com.my_profile.chat_service.mapper.dto.MessageAttachmentDto;
import com.my_profile.chat_service.repository.MessageAttachmentRepository;
import com.my_profile.chat_service.service.MessageAttachmentService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@SuppressWarnings("unused")
public class MessageAttachmentServiceImpl implements MessageAttachmentService {
    private final MessageAttachmentRepository attachmentRepository;
    private final MessageAttachmentMapper mapper;

    public MessageAttachmentServiceImpl(MessageAttachmentRepository attachmentRepository, MessageAttachmentMapper mapper) {
        this.attachmentRepository = attachmentRepository;
        this.mapper = mapper;
    }

    @Override
    public MessageAttachmentDto findById(UUID id) {
        Optional<MessageAttachment> optional = this.attachmentRepository.findById(id);
        if(optional.isPresent()) {
            return this.mapper.toDto(optional.get());
        }
        throw new ResourceNotFoundException("Cannot find attachment with id: " + id);
    }

    @Override
    public List<MessageAttachmentDto> findByMessageId(UUID messageId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return this.attachmentRepository.findByMessageId(messageId, pageable)
                .getContent()
                .stream()
                .map(this.mapper::toDto)
                .toList();
    }

    @Override
    public List<MessageAttachmentDto> findByGroupId(UUID groupId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return this.attachmentRepository.findByMessage_GroupId(groupId, pageable)
                .getContent()
                .stream()
                .map(this.mapper::toDto)
                .toList();
    }

    @Override
    public MessageAttachmentDto addAttachment(MessageAttachmentDto dto) {
        return this.mapper.toDto(
                this.attachmentRepository.save(
                        this.mapper.toEntity(dto)
                )
        );
    }

//    @Override
//    public List<MessageAttachmentDto> addMany(List<MessageAttachmentDto> dto) {
////        this.attachmentRepository.saveAll(dto)
//    }

    @Override
    public MessageAttachmentDto updateAttachment(UUID id, MessageAttachmentDto dto) {
        return null;
    }

    @Override
    public void deleteAttachment(UUID id) throws AccessDbException {
        try {
            this.attachmentRepository.deleteById(id);
        } catch (Exception e) {
            throw new AccessDbException("Cannot delete this attachment!");
        }
    }
}
