package com.my_profile.chat_service.service;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.dto.GroupDto;

import java.util.List;
import java.util.UUID;

public interface GroupService {
    GroupDto findById(UUID id);
    List<GroupDto> findByUserId(UUID userId);
    GroupDto addGroup(GroupDto dto) throws AccessDbException;
    GroupDto updateGroup(UUID id, GroupDto dto) throws AccessDbException;
    GroupDto deleteGroup(UUID id) throws AccessDbException;

}
