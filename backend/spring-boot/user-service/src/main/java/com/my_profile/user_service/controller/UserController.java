package com.my_profile.user_service.controller;

import com.my_profile.user_service.model.ResponseMessage;
import com.my_profile.user_service.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.text.ParseException;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("")
    public ResponseEntity<Object> getUserByID(@RequestParam String id) {
        User user = userService.getUserByID(id);
        if(user != null){
            return ResponseMessage.createResponse("Get user successfully!", user, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Get user failed!", null, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> getUser(@AuthenticationPrincipal OidcUser authentication) {
        String userID = authentication.getAttribute("sub");
        User user = userService.getUserByUserID(userID);

        if(user != null){
            return ResponseMessage.createResponse("Get user by user's id", user, HttpStatus.OK);
        }
        return new ResponseEntity<>(userID, HttpStatus.OK);
    }

    @PostMapping("/registration")
    public ResponseEntity<Object> registrationUser(@RequestBody Map<String, Object> map) throws ParseException {
        System.out.print("Map: " + map);
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

        User updatedUser = userService.addUser(user);

        if(updatedUser != null) {
            return ResponseMessage.createResponse("Update user successfully!", updatedUser, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Update user failed!", null, HttpStatus.OK);
    }

    @PutMapping("/update-profile")
    public ResponseEntity<Object> updateUser(@RequestBody User user, @AuthenticationPrincipal OidcUser authentication){
        User updatedUser = userService.updateUser(user);

        if(updatedUser != null) {
            return ResponseMessage.createResponse("Update user successfully!", updatedUser, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Update user failed!", null, HttpStatus.OK);
    }
}
