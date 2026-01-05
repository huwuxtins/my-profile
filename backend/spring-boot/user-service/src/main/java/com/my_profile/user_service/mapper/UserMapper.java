package com.my_profile.user_service.mapper;

import org.mapstruct.Mapper;

import com.my_profile.user_service.entity.User;
import com.my_profile.user_service.mapper.dto.UserDto;

@Mapper(componentModel = "spring")
public interface UserMapper extends BaseMapper<UserDto, User>{
    UserDto toUserDto(User user);
}
