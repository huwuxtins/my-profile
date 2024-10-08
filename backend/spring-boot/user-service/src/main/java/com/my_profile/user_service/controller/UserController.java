package com.my_profile.user_service.controller;

import com.my_profile.user_service.exception.AccessDbException;
import com.my_profile.user_service.exception.ResourceNotFoundException;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllUser(){
        List<User> users = userService.getAllUser();
        return ResponseMessage.createResponse("Get all users", users, HttpStatus.OK);
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> getUser(Authentication authentication) {
        User user = userService.getUserByUserID(authentication.getName());
        Map<String, Object> map = new HashMap<>();
        map.put("user", user);

        if(user != null){
            return ResponseMessage.createResponse("Get user by user's id", map, HttpStatus.OK);
        }
        throw new ResourceNotFoundException("User's id isn't exist!");
    }

    @PostMapping("/registration")
    public ResponseEntity<Object> registrationUser(@RequestBody Map<String, Object> map) throws AccessDbException {
        String userID = map.get("userID").toString();
        String email = map.get("email").toString();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSSSSS");
        LocalDateTime date;

        try {
            date = LocalDateTime.parse(map.get("createdAt").toString(), formatter);
        } catch (Exception e) {
            e.printStackTrace();
            date = LocalDateTime.now();
        }

        Date registerAt = Date.from(date.atZone(ZoneId.systemDefault()).toInstant());
        User user = new User
                .UserBuilder()
                .userID(userID)
                .email(email)
                .registerAt(registerAt)
                .build();

        User addedUser = userService.addUser(user);

        if(addedUser != null) {
            return ResponseMessage.createResponse("Create user successfully!", addedUser, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Create user failed!", null, HttpStatus.OK);
    }

    @PutMapping("/update-profile")
    public ResponseEntity<Object> updateUser(
            @RequestParam("avatar") MultipartFile avatar,
            @RequestBody User user, Authentication authentication) throws AccessDbException {
        String userID = authentication.getName();
        User updatedUser = userService.updateUser(userID, user);
        return ResponseMessage.createResponse("Update user successfully!", updatedUser, HttpStatus.OK);
    }
}
