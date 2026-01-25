package com.my_profile.chat_service.controller;

import com.my_profile.chat_service.service.GroupMemberService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/group-member")
public class GroupMemberController {
    private final GroupMemberService memberService;

    public GroupMemberController(GroupMemberService groupMemberService) {
        this.memberService = groupMemberService;
    }
}
