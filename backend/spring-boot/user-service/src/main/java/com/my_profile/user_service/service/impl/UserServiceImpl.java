package com.my_profile.user_service.service.impl;

import com.my_profile.user_service.controller.User;
import com.my_profile.user_service.exception.AccessDbException;
import com.my_profile.user_service.repository.UserRepository;
import com.my_profile.user_service.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

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
    public User addUser(User user) throws AccessDbException {
        try{
            return userRepository.insert(user);
        } catch (Exception e){
            throw new AccessDbException("Add user failed!");
        }
    }

    @Override
    public User updateUser(String id, User user) throws AccessDbException {
        Optional<User> optionalUser = this.userRepository.findById(id);
        if(optionalUser.isPresent()){
            User presentUser = optionalUser.get();
            presentUser.setFirstName(user.getFirstName());
            presentUser.setLastName(user.getLastName());
            presentUser.setPhoneNumber(user.getPhoneNumber());
            presentUser.setAvatar(user.getAvatar());
            presentUser.setBod(user.getBod());
            presentUser.setMajor(user.getMajor());
            presentUser.setDescription(user.getDescription());
            try {
                return this.userRepository.save(presentUser);
            } catch (Exception e){
                throw new AccessDbException("Update user failed!");
            }
        }
        return null;
    }

    @Override
    public User deleteUser(String id) throws AccessDbException {
        User user = this.userRepository.findByUserID(id).orElse(null);
        if(user != null){
            try{
                userRepository.delete(user);
                return user;
            } catch (Exception e){
                throw new AccessDbException("Delete user failed!");
            }
        }
        return null;
    }
}
