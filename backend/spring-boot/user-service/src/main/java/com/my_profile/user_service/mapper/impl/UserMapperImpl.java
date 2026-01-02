package com.my_profile.user_service.mapper.impl;

import com.my_profile.user_service.controller.User;
import com.my_profile.user_service.mapper.UserMapper;
import com.my_profile.user_service.mapper.dto.UserDto;

public class UserMapperImpl implements UserMapper {

    @Override
    public UserDto userToUserDto(User user) {
        if(user == null) {
            return null;
        }

        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setName(user.getFirstName());
        userDto.setUsername(user.getUsername());
        userDto.setAvatar(user.getAvatar());

        return userDto;
    }
    
}
