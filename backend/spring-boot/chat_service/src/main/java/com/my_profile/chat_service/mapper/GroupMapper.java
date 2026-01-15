package com.my_profile.chat_service.mapper;

import com.my_profile.chat_service.entity.Group;
import com.my_profile.chat_service.mapper.dto.GroupDto;

public interface GroupMapper extends BaseMapper<GroupDto, Group>{
    GroupDto toDto(Group group);
    Group toEntity(GroupDto dto);
}
