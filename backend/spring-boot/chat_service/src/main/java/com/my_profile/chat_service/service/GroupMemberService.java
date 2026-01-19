package com.my_profile.chat_service.service;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.AlreadyObjectException;
import com.my_profile.chat_service.mapper.dto.GroupMemberDto;

import java.util.List;
import java.util.UUID;

public interface GroupMemberService {
    GroupMemberDto findByGroupIdAndUserId(UUID groupId, UUID userId);
    List<GroupMemberDto> findByGroupId(UUID groupId, int page, int size);
    List<GroupMemberDto> findByUserId(UUID userId, int page, int size);
    GroupMemberDto addGroupMember(GroupMemberDto dto) throws AlreadyObjectException;
    GroupMemberDto updateGroupMember(UUID id, GroupMemberDto dto) throws AccessDbException;
    void deleteGroupMember(UUID groupId, UUID userId) throws AccessDbException;
}
