package com.my_profile.chat_service.service.impl;

import com.my_profile.chat_service.entity.GroupMember;
import com.my_profile.chat_service.exception.AccessDbException;
import com.my_profile.chat_service.exception.AlreadyObjectException;
import com.my_profile.chat_service.exception.ResourceNotFoundException;
import com.my_profile.chat_service.mapper.GroupMemberMapper;
import com.my_profile.chat_service.mapper.dto.GroupMemberDto;
import com.my_profile.chat_service.repository.GroupMemberRepository;
import com.my_profile.chat_service.service.GroupMemberService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class GroupMemberServiceImpl implements GroupMemberService {
    private final GroupMemberRepository repository;
    private final GroupMemberMapper mapper;

    public GroupMemberServiceImpl(GroupMemberRepository repository, GroupMemberMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public GroupMemberDto findByGroupIdAndUserId(UUID groupId, UUID userId) {
        Optional<GroupMember> optional = this.repository.findByGroupIdAndUserId(groupId, userId);
        if(optional.isPresent()) {
            return this.mapper.toDto(optional.get());
        }
        throw new ResourceNotFoundException("Cannot find this user in this group!");
    }

    @Override
    public List<GroupMemberDto> findByGroupId(UUID groupId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);
        return this.repository.findByGroupId(groupId, pageable)
                .getContent()
                .stream()
                .map(this.mapper::toDto)
                .toList();
    }

    @Override
    public List<GroupMemberDto> findByUserId(UUID userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);
        return this.repository.findByUserId(userId, pageable)
                .getContent()
                .stream()
                .map(this.mapper::toDto)
                .toList();
    }

    @Override
    public GroupMemberDto addGroupMember(GroupMemberDto dto) throws AlreadyObjectException {
        if(this.repository.existsByGroupIdAndUserId(dto.getGroupId(), dto.getUserId())) {
            throw new AlreadyObjectException("This member is exist in this group!");
        }
        return this.mapper.toDto(
                this.repository.save(
                        this.mapper.toEntity(dto)
                )
        );
    }

    @Override
    public GroupMemberDto updateGroupMember(UUID id, GroupMemberDto dto) throws AccessDbException {
        return null;
    }

    @Override
    public void deleteGroupMember(UUID groupId, UUID userId) throws AccessDbException {
        try {
            this.repository.deleteByGroupIdAndUserId(groupId, userId);
        } catch (Exception e) {
            throw new AccessDbException("Cannot delete this user in this group!");
        }
    }
}
