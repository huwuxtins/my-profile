package com.my_profile.chat_service.controller;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.ResourceNotFoundException;
import com.my_profile.chat_service.mapper.dto.GroupDto;
import com.my_profile.chat_service.model.ApiResponse;
import com.my_profile.chat_service.model.ResponseMessage;
import com.my_profile.chat_service.service.GroupService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("api/v1/group")
public class GroupController {
    private final GroupService groupService;

    public GroupController(GroupService groupService) {
        this.groupService = groupService;
    }

    @GetMapping("/")
    public ResponseEntity<ApiResponse<List<GroupDto>>> getGroups(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication) {
        String userId = authentication.getName();
        List<GroupDto> groups = this.groupService.findByUserId(UUID.fromString(userId), page, size);
        return ResponseMessage.createResponse("Get groups by user successfully!", groups, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<GroupDto>> getGroupById(@PathVariable UUID id) {
        GroupDto group = this.groupService.findById(id);
        return ResponseMessage.createResponse("Get group successfully!", group, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse<GroupDto>> addGroup(@RequestBody GroupDto dto,
                                                          Authentication authentication) throws AccessDbException {
        String userId = authentication.getName();
        GroupDto addedGroup = this.groupService.addGroup(dto, UUID.fromString(userId));

        if(addedGroup != null) {
            return ResponseMessage.createResponse("Add group successfully!", addedGroup, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Add group failed!", null, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<GroupDto>> updateGroup(@PathVariable UUID id, @RequestBody GroupDto dto) throws AccessDbException {
        GroupDto updatedGroup = this.groupService.updateGroup(id, dto);

        if(updatedGroup != null) {
            return ResponseMessage.createResponse("Update group successfully!", updatedGroup, HttpStatus.OK);
        }
        throw new ResourceNotFoundException("This group isn't exist!");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<String>> deleteGroup(@PathVariable UUID id, Authentication authentication) throws AccessDbException {
        String userId = authentication.getName();
        this.groupService.deleteGroup(id, UUID.fromString(userId));
        return ResponseMessage.createResponse("Delete group successfully!", "Deleted", HttpStatus.OK);
    }
}
