package com.my_profile.chat_service.service.impl;

import com.my_profile.chat_service.entity.Group;
import com.my_profile.chat_service.entity.GroupMember;
import com.my_profile.chat_service.enums.GroupRole;
import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.ResourceNotFoundException;
import com.my_profile.chat_service.mapper.GroupMapper;
import com.my_profile.chat_service.mapper.GroupMemberMapper;
import com.my_profile.chat_service.mapper.dto.GroupDto;
import com.my_profile.chat_service.mapper.dto.GroupMemberDto;
import com.my_profile.chat_service.repository.GroupMemberRepository;
import com.my_profile.chat_service.repository.GroupRepository;
import com.my_profile.chat_service.service.GroupService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Transactional
public class GroupServiceImpl implements GroupService {

    private final GroupRepository groupRepository;
    private final GroupMemberRepository groupMemberRepository;
    private final GroupMapper groupMapper;
    private final GroupMemberMapper groupMemberMapper;

    public GroupServiceImpl(GroupRepository groupRepository, GroupMemberRepository groupMemberRepository, GroupMapper groupMapper, GroupMemberMapper groupMemberMapper) {
        this.groupRepository = groupRepository;
        this.groupMemberRepository = groupMemberRepository;
        this.groupMapper = groupMapper;
        this.groupMemberMapper = groupMemberMapper;
    }

    @Override
    public GroupDto findById(UUID id) {
        Optional<Group> optional = this.groupRepository.findById(id);
        if(optional.isPresent()) {
            return this.groupMapper.toDto(optional.get());
        }
        throw new ResourceNotFoundException("Cannot find group by id: " + id);
    }

    @Override
    public List<GroupDto> findByUserId(UUID userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);
        return this.groupRepository.findByUserId(userId, pageable)
                .getContent()
                .stream()
                .map(this.groupMapper::toDto)
                .toList();
    }

    @Override
    public GroupDto addGroup(GroupDto dto, UUID creatorUserId) throws AccessDbException {
        Group group = this.groupMapper.toEntity(dto);

        Group savedGroup = this.groupRepository.save(group);
        GroupMemberDto owner = GroupMemberDto.builder()
                .groupId(savedGroup.getId())
                .userId(creatorUserId)
                .role(GroupRole.ADMIN)
                .build();

        this.groupMemberRepository.save(this.groupMemberMapper.toEntity(owner));

        return this.groupMapper.toDto(savedGroup);
    }

    @Override
    public GroupDto updateGroup(UUID id, GroupDto dto) throws AccessDbException {
        return null;
    }

    @Override
    public void deleteGroup(UUID id, UUID requesterUserId) throws AccessDbException {
        GroupMember member = this.groupMemberRepository
                .findByGroupIdAndUserId(id, requesterUserId)
                .orElseThrow(() -> new SecurityException("Not a group member"));

        if (member.getRole() != GroupRole.ADMIN) {
            throw new SecurityException("Only OWNER can delete group");
        }

        this.groupMemberRepository.deleteByGroupId(id);
        this.groupRepository.deleteById(id);
    }
}
