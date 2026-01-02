package com.my_profile.user_service.mapper;

import org.mapstruct.Mapper;

import com.my_profile.user_service.controller.User;
import com.my_profile.user_service.mapper.dto.UserDto;

@Mapper
public interface UserMapper {
    UserDto userToUserDto(User user);
}
