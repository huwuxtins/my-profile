package com.my_profile.chat_service.mapper;

import com.my_profile.chat_service.entity.Group;
import com.my_profile.chat_service.mapper.dto.GroupDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface GroupMapper extends BaseMapper<GroupDto, Group>{
//    @Mapping(target = "id", ignore = true)
    GroupDto toDto(Group group);
    Group toEntity(GroupDto dto);
}
