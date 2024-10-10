package com.my_profile.user_service.service;

import com.my_profile.user_service.controller.User;
import com.my_profile.user_service.exception.AccessDbException;

import java.util.List;

public interface UserService {
    User getUserByID(String id);
    User getUserByUserID(String userID);
    List<User> getAllUser();
    User addUser(User user) throws AccessDbException;
    User updateUser(String id, User user) throws AccessDbException;
    User deleteUser(String id) throws AccessDbException;
}
