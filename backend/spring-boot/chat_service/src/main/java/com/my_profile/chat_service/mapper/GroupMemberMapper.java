package com.my_profile.chat_service.mapper;

import com.my_profile.chat_service.entity.GroupMember;
import com.my_profile.chat_service.mapper.dto.GroupMemberDto;

public interface GroupMemberMapper extends BaseMapper<GroupMemberDto, GroupMember>{
    GroupMemberDto toDto(GroupMember groupMember);
    GroupMember toEntity(GroupMemberDto dto);
}
