package com.my_profile.user_service.controller;

import com.my_profile.user_service.entity.User;
import com.my_profile.user_service.exception.AccessDbException;
import com.my_profile.user_service.exception.ResourceNotFoundException;
import com.my_profile.user_service.mapper.UserMapper;
import com.my_profile.user_service.mapper.dto.UserDto;
import com.my_profile.user_service.model.ApiResponse;
import com.my_profile.user_service.model.ResponseMessage;
import com.my_profile.user_service.service.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;
    private final UserMapper userMapper;

    public UserController(UserService userService, UserMapper userMapper) {
        this.userService = userService;
        this.userMapper = userMapper;
    }

    @GetMapping("/all")
    public ResponseEntity<ApiResponse<List<UserDto>>> getAllUser(){
        List<UserDto> users = userService.getAllUser();
        return ResponseMessage.createResponse("Get all users", users, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<ApiResponse<UserDto>> getUser(Authentication authentication) {
        User user = userService.getUserByUserID(authentication.getName());

        if(user != null){
            return ResponseMessage.createResponse("Get user by user's id", userMapper.toUserDto(user), HttpStatus.OK);
        }
        throw new ResourceNotFoundException("User's id isn't exist!");
    }

    @PostMapping("/registration")
    public ResponseEntity<ApiResponse<UserDto>> registrationUser(@RequestBody Map<String, Object> map) throws AccessDbException {
        String userId = map.get("userId").toString();
        String email = map.get("email").toString();
        String username = map.get("username").toString();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSSSS");
        LocalDateTime date;

        try {
            date = LocalDateTime.parse(map.get("createdAt").toString(), formatter);
        } catch (Exception e) {
            e.printStackTrace();
            date = LocalDateTime.now();
        }

        Date registeredAt = Date.from(date.atZone(ZoneId.systemDefault()).toInstant());
        User user = User
                .builder()
                .userId(userId)
                .username(username)
                .email(email)
                .registeredAt(registeredAt)
                .build();

        User addedUser = userService.addUser(user);
        UserDto userDto = this.userMapper.toUserDto(addedUser);

        if(addedUser != null) {
            return ResponseMessage.createResponse("Create user successfully!", userDto, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Create user failed!", null, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<ApiResponse<UserDto>> updateUser(
            @RequestParam("avatar") MultipartFile avatar,
            @RequestBody User user, Authentication authentication) throws AccessDbException {
        String userID = authentication.getName();
        UserDto userDto = this.userMapper.toUserDto(userService.updateUser(userID, user));
        
        return ResponseMessage.createResponse("Update user successfully!", userDto, HttpStatus.OK);
    }
}
