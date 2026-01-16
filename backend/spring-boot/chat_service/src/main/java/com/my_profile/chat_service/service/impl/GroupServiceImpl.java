package com.my_profile.chat_service.service.impl;

import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.mapper.GroupMapper;
import com.my_profile.chat_service.mapper.dto.GroupDto;
import com.my_profile.chat_service.repository.GroupRepository;
import com.my_profile.chat_service.service.GroupService;

import java.util.List;
import java.util.UUID;

public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;
    private final GroupMapper groupMapper;

    public GroupServiceImpl(GroupRepository groupRepository, GroupMapper groupMapper) {
        this.groupRepository = groupRepository;
        this.groupMapper = groupMapper;
    }

    @Override
    public GroupDto findById(UUID id) {
        return null;
    }

    @Override
    public List<GroupDto> findByUserId(UUID userId) {
        return List.of();
    }

    @Override
    public GroupDto addGroup(GroupDto dto) throws AccessDbException {
        return null;
    }

    @Override
    public GroupDto updateGroup(UUID id, GroupDto dto) throws AccessDbException {
        return null;
    }

    @Override
    public GroupDto deleteGroup(UUID id) throws AccessDbException {
        return null;
    }
}
