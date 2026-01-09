package com.my_profile.user_service.service.impl;

import com.my_profile.user_service.entity.User;
import com.my_profile.user_service.exception.AccessDbException;
import com.my_profile.user_service.exception.ResourceNotFoundException;
import com.my_profile.user_service.mapper.UserMapper;
import com.my_profile.user_service.mapper.dto.UserDto;
import com.my_profile.user_service.repository.UserRepository;
import com.my_profile.user_service.service.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserServiceImpl(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    @Override
    public User getUserById(String id) {
        Optional<User> optionalUser = userRepository.findById(id);
        if(optionalUser.isPresent()){
            return optionalUser.get();
        }
        throw new ResourceNotFoundException("This user isn't exist!");
    }

    @Override
    public User getUserByUserId(String userId) {
        Optional<User> optionalUser = userRepository.findByUserId(userId);
        if(optionalUser.isPresent()){
            return optionalUser.get();
        }
        throw new ResourceNotFoundException("This user isn't exist!");
    }

    @Override
    public List<UserDto> getAllUser() {
        return userRepository.findAll()
                .stream()
                .map(userMapper::toUserDto)
                .toList();
    }

    @Override
    public User addUser(User user) throws AccessDbException {
        try{
            return userRepository.save(user);
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
        throw new ResourceNotFoundException("This user isn't exist!");
    }

    @Override
    public User deleteUser(String id) throws AccessDbException {
        User user = this.userRepository.findByUserId(id).orElse(null);
        if(user != null){
            try{
                userRepository.delete(user);
                return user;
            } catch (Exception e){
                throw new AccessDbException("Delete user failed!");
            }
        }
        throw new ResourceNotFoundException("This user isn't exist!");
    }
}
