package com.my_profile.user_service.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.my_profile.user_service.controller.User;
import com.my_profile.user_service.mapper.dto.UserDto;

@Mapper(componentModel = "spring")
public interface UserMapper extends BaseMapper<UserDto, User>{
    @Mapping(target = "id", source = "user.id")
    @Mapping(target = "name", source = "user.name")
    @Mapping(target = "username", source = "user.username")
    @Mapping(target = "email", source = "user.email")
    @Mapping(target = "avatar", source = "user.avatar")
    UserDto userToUserDto(User user);
}
