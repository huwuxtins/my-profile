package com.my_profile.user_service.service;

import com.my_profile.user_service.controller.User;

import java.util.List;

public interface UserService {
    User getUserByID(String id);
    User getUserByUserID(String userID);
    List<User> getAllUser();
    User addUser(User user);
    User updateUser(String id, User user);
    User deleteUser(User user);
}
