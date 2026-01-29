package com.my_profile.chat_service.controller;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.AlreadyObjectException;
import com.my_profile.chat_service.exception.ResourceNotFoundException;
import com.my_profile.chat_service.mapper.dto.GroupMemberDto;
import com.my_profile.chat_service.model.ApiResponse;
import com.my_profile.chat_service.model.ResponseMessage;
import com.my_profile.chat_service.service.GroupMemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/group-member")
public class GroupMemberController {
    private final GroupMemberService memberService;

    public GroupMemberController(GroupMemberService groupMemberService) {
        this.memberService = groupMemberService;
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse<List<GroupMemberDto>>> getGroupMembers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication) {
        String userId = authentication.getName();
        List<GroupMemberDto> groupMembers = this.memberService.findByUserId(UUID.fromString(userId), page, size);
        return ResponseMessage.createResponse("Get groups by user successfully!", groupMembers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<GroupMemberDto>> getGroupMemberById(@PathVariable UUID id, Authentication authentication) {
        String userId = authentication.getName();
        GroupMemberDto groupMemberDto = this.memberService.findByGroupIdAndUserId(id, UUID.fromString(userId));
        return ResponseMessage.createResponse("Get group successfully!", groupMemberDto, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse<GroupMemberDto>> addGroup(@RequestBody GroupMemberDto dto) throws AccessDbException, AlreadyObjectException {
        GroupMemberDto addedGroupMember = this.memberService.addGroupMember(dto);

        if(addedGroupMember != null) {
            return ResponseMessage.createResponse("Add group successfully!", addedGroupMember, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Add group failed!", null, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<GroupMemberDto>> updateGroupMember(@PathVariable UUID id, @RequestBody GroupMemberDto dto) throws AccessDbException {
        GroupMemberDto updatedGroup = this.memberService.updateGroupMember(id, dto);

        if(updatedGroup != null) {
            return ResponseMessage.createResponse("Update group successfully!", updatedGroup, HttpStatus.OK);
        }
        throw new ResourceNotFoundException("This group isn't exist!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteGroupMember(@PathVariable UUID id, Authentication authentication) throws AccessDbException {
        String userId = authentication.getName();
        this.memberService.deleteGroupMember(id, UUID.fromString(userId));
        return ResponseMessage.createResponse("Delete group successfully!", "Deleted", HttpStatus.OK);
    }
}
