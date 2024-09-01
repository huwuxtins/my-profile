package com.my_profile.user_service.service.impl;

import com.my_profile.user_service.controller.User;
import com.my_profile.user_service.repository.UserRepository;
import com.my_profile.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User getUserByID(String id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User getUserByUserID(String userID) {
        return userRepository.findByUserID(userID).orElse(null);
    }

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public User addUser(User user) {
        try{
            return userRepository.insert(user);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public User updateUser(User user) {
        try{
            return userRepository.save(user);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public User deleteUser(User user) {
        try{
            userRepository.delete(user);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
