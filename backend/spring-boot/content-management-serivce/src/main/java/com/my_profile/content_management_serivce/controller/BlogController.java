package com.my_profile.content_management_serivce.controller;

import com.my_profile.content_management_serivce.client.UserServiceClient;
import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.exception.ResourceNotFoundException;
import com.my_profile.content_management_serivce.model.ResponseMessage;
import com.my_profile.content_management_serivce.service.BlogService;
import org.json.JSONObject;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

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
        List<Blog> blogs = blogService.getBlogs(page, size);
        if(blogs.isEmpty()){
            throw new ResourceNotFoundException("Don't have any blog in current time");
        }
        return ResponseMessage.createResponse("Get blogs successfully!", blogs, HttpStatus.NOT_FOUND);
    }

    @GetMapping("/all-blogs")
    @Cacheable(cacheNames = "user")
    public ResponseEntity<Object> getBlogsByUserID(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication){
        List<Blog> blogs = blogService.getBlogsByUserID(authentication.getName(), page, size);
        return ResponseMessage.createResponse("Get blogs by profile successfully!", blogs, HttpStatus.OK);
    }

    @GetMapping("/{blogID}")
    public ResponseEntity<Object> getBlogByID(@PathVariable String blogID) throws Exception {
        Blog blog = blogService.getBlogByID(blogID);

        Map<String, Object> map = new HashMap<>();
        map.put("blog", blog);

        try {
            ResponseEntity<String> response = userServiceClient.getUserByID(blog.getUserID());
            if(response.getBody() != null){
                JSONObject jsonObject = new JSONObject(response.getBody());
                Map<String, Object> author = jsonObject.getJSONObject("data").toMap();
                map.put("author", author);
                return ResponseMessage.createResponse("Get blog successfully!", map, HttpStatus.OK);
            }
            throw new ResourceNotFoundException("This user isn't exist!");
        } catch (Exception e){
            throw new Exception();
        }
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
    public ResponseEntity<Object> addBlog(@RequestBody Blog blog, Authentication authentication) throws AccessDbException {
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

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateBlog(@PathVariable String id, @RequestBody Blog blog) throws AccessDbException {
        Blog updateBlog = blogService.updateBlog(id, blog);
        return ResponseMessage.createResponse("Update blog successfully!", updateBlog, HttpStatus.CREATED);
    }

    @DeleteMapping("/{blogID}")
    public ResponseEntity<Object> deleteBlog(@PathVariable String blogID) throws AccessDbException {
        Blog blog = blogService.deleteBlog(blogID);
        return ResponseMessage.createResponse("Delete blog successfully!", blog, HttpStatus.OK);
    }
}
