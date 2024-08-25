package com.my_profile.content_management_serivce.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@FeignClient(name = "user-service")
public interface UserServiceClient {
    @GetMapping(value = "/api/v1/user", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<String> getUserByID(@RequestParam String id);
}
