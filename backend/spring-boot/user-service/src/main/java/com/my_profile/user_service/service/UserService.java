package com.my_profile.user_service.service;

import com.my_profile.user_service.entity.User;
import com.my_profile.user_service.exception.AccessDbException;
import com.my_profile.user_service.mapper.dto.UserDto;

import java.util.List;

public interface UserService {
    User getUserById(String id);
    User getUserByUserId(String userId);
    List<UserDto> getAllUser();
    User addUser(User user) throws AccessDbException;
    User updateUser(String id, User user) throws AccessDbException;
    User deleteUser(String id) throws AccessDbException;
}
