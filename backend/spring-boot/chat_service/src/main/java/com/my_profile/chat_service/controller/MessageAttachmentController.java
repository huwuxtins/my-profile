package com.my_profile.chat_service.controller;

import com.my_profile.chat_service.service.MessageAttachmentService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/message-attachment")
@SuppressWarnings("unused")
public class MessageAttachmentController {

    private final MessageAttachmentService attachmentService;

    public MessageAttachmentController(MessageAttachmentService attachmentService) {
        this.attachmentService = attachmentService;
    }
}
