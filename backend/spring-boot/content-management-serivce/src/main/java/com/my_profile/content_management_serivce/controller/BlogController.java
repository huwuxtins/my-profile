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
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/blog")
public class BlogController {
    @Autowired
    private BlogService blogService;

    @Autowired
    private UserServiceClient userServiceClient;

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
        Mono<Page<Blog>> blogs = blogService.getBlogsByUserID(userID, page, size);

        if(blogs.block().isEmpty()){
            return ResponseMessage.createResponse("There aren't any blog in your profile!", blogs, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get blogs by profile successfully!", blogs, HttpStatus.OK);
    }

    @GetMapping("/{blogID}")
    public Mono<ResponseEntity<Object>> getBlogByID(@PathVariable String blogID) {
        return blogService.getBlogByID(blogID)
                .flatMap(blog -> {
                    // Call user service to get the user details using userID
                    Mono<ResponseEntity<String>> userResponseMono = userServiceClient.getUserByID(blog.getUserID());

                    return userResponseMono.flatMap(response -> {
                        if (response.getBody() != null) {
                            JSONObject jsonObject = new JSONObject(response.getBody());
                            Map<String, Object> author = jsonObject.getJSONObject("data").toMap();

                            Map<String, Object> map = new HashMap<>();
                            map.put("blog", blog);
                            map.put("author", author);

                            return Mono.just(ResponseMessage.createResponse("Get blog successfully!", map, HttpStatus.OK));
                        } else {
                            return Mono.just(ResponseMessage.createResponse("User not found", null, HttpStatus.NOT_FOUND));
                        }
                    });
                })
                .switchIfEmpty(Mono.just(ResponseMessage.createResponse("This blog isn't exist", null, HttpStatus.NOT_FOUND)));
    }


    @PostMapping("")
    public Mono<ResponseEntity<Object>> addBlog(@RequestBody Blog blog) {
        return ReactiveSecurityContextHolder.getContext()
                .map(SecurityContext::getAuthentication)
                .flatMap(authentication -> {
                    if (authentication != null) {
                        String userId = authentication.getName(); // Get the user's ID or name
                        blog.setUserID(userId); // Set the user ID in the blog
                        return blogService.addBlog(blog)
                                .flatMap(addedBlog -> {
                                    return Mono.just(ResponseMessage.createResponse("Add blog successfully!", addedBlog, HttpStatus.CREATED));
                                });
                    } else {
                        return Mono.just(ResponseMessage.createResponse("No authentication available", null, HttpStatus.UNAUTHORIZED));
                    }
                });
    }

    @PutMapping("")
    public ResponseEntity<Object> updateBlog(@RequestBody Blog blog, @AuthenticationPrincipal OidcUser authentication){
        Mono<Blog> updateBlog = blogService.updateBlog(blog);
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
