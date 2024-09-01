package com.my_profile.user_service.service;

import com.my_profile.user_service.controller.User;

import java.util.List;

public interface UserService {
    public User getUserByID(String id);
    public User getUserByUserID(String userID);
    public List<User> getAllUser();
    public User addUser(User user);
    public User updateUser(User user);
    public User deleteUser(User user);
}
