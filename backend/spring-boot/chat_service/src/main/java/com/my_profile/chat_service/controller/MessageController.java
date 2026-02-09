package com.my_profile.chat_service.controller;

import com.my_profile.chat_service.mapper.dto.MessageDto;
import com.my_profile.chat_service.model.ApiResponse;
import com.my_profile.chat_service.model.ResponseMessage;
import com.my_profile.chat_service.service.MessageService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/message")
@SuppressWarnings("unused")
public class MessageController {
    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }

    @GetMapping("/{groupId}")
    public ResponseEntity<ApiResponse<List<MessageDto>>> getMessageByGroupId(@PathVariable UUID groupId,
                                                                             @RequestParam(defaultValue = "0") int page,
                                                                             @RequestParam(defaultValue = "10") int size) {
        List<MessageDto> messages = this.messageService.findByGroupId(groupId, page, size);
        return ResponseMessage.createResponse("Get messages by groupId successfully!", messages, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<MessageDto>> getMessageById(@PathVariable UUID id) {
        MessageDto messageDto = this.messageService.findById(id);
        return ResponseMessage.createResponse("Get message by id successfully!", messageDto, HttpStatus.OK);
    }
}
