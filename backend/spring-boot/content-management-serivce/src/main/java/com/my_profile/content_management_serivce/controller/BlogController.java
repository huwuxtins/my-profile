package com.my_profile.content_management_serivce.controller;

import com.my_profile.content_management_serivce.client.UserServiceClient;
import com.my_profile.content_management_serivce.model.ResponseMessage;
import com.my_profile.content_management_serivce.service.BlogService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.annotation.RegisteredOAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.web.reactive.function.client.ServerOAuth2AuthorizedClientExchangeFilterFunction;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
@RestController
@RequestMapping("/api/v1/blog")
public class BlogController {
    private final BlogService blogService;

    private final UserServiceClient userServiceClient;

//    private final WebClient webClient;

    public BlogController(BlogService blogService, UserServiceClient userServiceClient){
        this.blogService = blogService;
//        this.webClient = webClient;
        this.userServiceClient = userServiceClient;
    }

    @GetMapping("")
    public ResponseEntity<Object> getBlogs(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size){
        return ResponseMessage.createResponse("Get blogs successfully!", null, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> getBlogsByUserID(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @AuthenticationPrincipal OidcUser authentication){
        String userID = authentication.getAttribute("sub");
        List<Blog> blogs = blogService.getBlogsByUserID(userID, page, size);

        if(blogs.isEmpty()){
            return ResponseMessage.createResponse("There aren't any blog in your profile!", blogs, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get blogs by profile successfully!", blogs, HttpStatus.OK);
    }

    @GetMapping("/{blogID}")
    public ResponseEntity<Object> getBlogByID(@PathVariable String blogID) {

        Blog blog = blogService.getBlogByID(blogID);

        if(blog == null){
            return ResponseMessage.createResponse("This blog isn't exist", null, HttpStatus.NOT_FOUND);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("blog", blog);

        System.out.println(blog);
        ResponseEntity<String> response = userServiceClient.getUserByID(blog.getUserID());
        if(response.getBody() != null){
            JSONObject jsonObject = new JSONObject(response.getBody());
            Map<String, Object> author = jsonObject.getJSONObject("data").toMap();
            System.out.println("Author: " + author);
            map.put("author", author);
        }
        return ResponseMessage.createResponse("Get blog successfully!", map, HttpStatus.OK);
//        return blogService.getBlogByID(blogID)
//                .flatMap(blog -> {
                    // Call user service to get the user details using userID
//                    Mono<ResponseEntity<String>> userResponseMono = this.webClient
//                            .get()
//                            .uri(uriBuilder -> uriBuilder
//                                    .host("lb://user-service")
//                                    .path("/api/v1/user")
//                                    .queryParam("id", blog.getUserID())
//                                    .build())
//                            .retrieve()
//                            .toEntity(String.class);

//                    Map<String, Object> map = new HashMap<>();
//                    map.put("blog", blog);
//                    ResponseEntity<String> response = userServiceClient.getUserByID(blog.getUserID());
//                    if(response.getBody() != null){
//                        JSONObject jsonObject = new JSONObject(response.getBody());
//                        Map<String, Object> author = jsonObject.getJSONObject("data").toMap();
//                        System.out.println("Author: " + author);
//                        map.put("author", author);
//                    }
//                    return Mono.just(ResponseMessage.createResponse("Get blog successfully!", map, HttpStatus.OK));

//                    return ReactiveSecurityContextHolder.getContext()
//                            .map(SecurityContext::getAuthentication)
//                            .flatMap(authentication -> {
//                                if (authentication != null) {
//
//                                    JwtAuthenticationToken jwtToken = (JwtAuthenticationToken) authentication;
//                                    System.out.println(jwtToken.getToken().getTokenValue());
//                                    return Mono.just(ResponseMessage.createResponse("No authentication available", authentication, HttpStatus.UNAUTHORIZED));
//                                } else {
//                                    return Mono.just(ResponseMessage.createResponse("No authentication available", null, HttpStatus.UNAUTHORIZED));
//                                }
//                            });
//                    return userResponseMono.flatMap(response -> {
//                        if (response.getBody() != null) {
//                            JSONObject jsonObject = new JSONObject(response.getBody());
//                            Map<String, Object> author = jsonObject.getJSONObject("data").toMap();
//
//                            Map<String, Object> map = new HashMap<>();
//                            map.put("blog", blog);
//                            map.put("author", author);
//
//                            return Mono.just(ResponseMessage.createResponse("Get blog successfully!", map, HttpStatus.OK));
//                        } else {
//                            return Mono.just(ResponseMessage.createResponse("User not found", null, HttpStatus.NOT_FOUND));
//                        }
//                    });
//                })
//                .switchIfEmpty(Mono.just(ResponseMessage.createResponse("This blog isn't exist", null, HttpStatus.NOT_FOUND)));
    }

    @PostMapping("")
    public ResponseEntity<Object> addBlog(@RequestBody Blog blog) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String userID = authentication.getName();
        blog.setUserID(userID);

        Blog addedBlog = blogService.addBlog(blog);
        if(addedBlog != null){
            return ResponseMessage.createResponse("Add blog successfully!", addedBlog, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Add blog failed!", null, HttpStatus.BAD_REQUEST);
//        Reactive web
//        return ReactiveSecurityContextHolder.getContext()
//                .map(SecurityContext::getAuthentication)
//                .flatMap(authentication -> {
//                    if (authentication != null) {
//                        String userId = authentication.getName(); // Get the user's ID or name
//                        blog.setUserID(userId); // Set the user ID in the blog
//                        return blogService.addBlog(blog)
//                                .flatMap(addedBlog -> {
//                                    return Mono.just(ResponseMessage.createResponse("Add blog successfully!", addedBlog, HttpStatus.CREATED));
//                                });
//                    } else {
//                        return Mono.just(ResponseMessage.createResponse("No authentication available", null, HttpStatus.UNAUTHORIZED));
//                    }
//                });
    }

    @PutMapping("")
    public ResponseEntity<Object> updateBlog(@RequestBody Blog blog, @AuthenticationPrincipal OidcUser authentication){
        Blog updateBlog = blogService.updateBlog(blog);
        if(updateBlog != null){
            return ResponseMessage.createResponse("Update blog successfully!", updateBlog, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Update blog failed!", null, HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{blogID}")
    public ResponseEntity<Object> deleteBlog(@PathVariable String blogID){
        blogService.deleteBlog(blogID);
        return ResponseMessage.createResponse("Delete blog successfully!", null, HttpStatus.OK);
    }
}
