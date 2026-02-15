package com.my_profile.chat_service.controller;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.dto.MessageAttachmentDto;
import com.my_profile.chat_service.model.ApiResponse;
import com.my_profile.chat_service.model.ResponseMessage;
import com.my_profile.chat_service.service.MessageAttachmentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/message-attachment")
@SuppressWarnings("unused")
public class MessageAttachmentController {

    private final MessageAttachmentService attachmentService;

    public MessageAttachmentController(MessageAttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }

    @GetMapping("/{messageId}")
    public ResponseEntity<ApiResponse<List<MessageAttachmentDto>>> getByMessageId(@PathVariable UUID messageId,
                                                                                  @RequestParam(defaultValue = "0") int page,
                                                                                  @RequestParam(defaultValue = "10") int size) {
        List<MessageAttachmentDto> dto = this.attachmentService.findByMessageId(messageId);
        return ResponseMessage.createResponse("Get attachment by messageId successfully!", dto, HttpStatus.OK);
    }

    @GetMapping("/{groupId}")
    public ResponseEntity<ApiResponse<List<MessageAttachmentDto>>> getByGroupId(@PathVariable UUID groupId,
                                                                                @RequestParam(defaultValue = "0") int page,
                                                                                @RequestParam(defaultValue = "10") int size) {
        List<MessageAttachmentDto> dto = this.attachmentService.findByGroupId(groupId, page, size);
        return ResponseMessage.createResponse("Get attachments by groupId successfully!", dto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteMessage(@PathVariable UUID id) throws AccessDbException {
        this.attachmentService.deleteAttachment(id);
        return ResponseMessage.createResponse("Delete attachment by id successfully !", "Deleted", HttpStatus.OK);
    }
}
