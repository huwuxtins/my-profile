package com.my_profile.content_management_serivce.controller;

import com.my_profile.content_management_serivce.client.UserServiceClient;
import com.my_profile.content_management_serivce.model.ResponseMessage;
import com.my_profile.content_management_serivce.service.BlogService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
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
        List<Blog> blogs = blogService.getBlogsByUserID(userID, page, size);

        if(blogs.isEmpty()){
            return ResponseMessage.createResponse("There aren't any blog in your profile!", blogs, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get blogs by profile successfully!", blogs, HttpStatus.OK);
    }

    @GetMapping("/{blogID}")
    public ResponseEntity<Object> getBlogByID(@PathVariable String blogID){
        Blog blog = blogService.getBlogByID(blogID);

        if(blog == null){
            return ResponseMessage.createResponse("This blog isn't exist", null, HttpStatus.NOT_FOUND);
        }

        Map<String, Object> map = new HashMap<>();
        map.put("blog", blog);

        ResponseEntity<String> response = userServiceClient.getUserByID(blog.getUserID());
        if(response.getBody() != null){
            JSONObject jsonObject = new JSONObject(response.getBody());
            Map<String, Object> author = jsonObject.getJSONObject("data").toMap();
            System.out.println("Author: " + author);
            map.put("author", author);
        }
        return ResponseMessage.createResponse("Get blog successfully!", map, HttpStatus.OK);
    }

    @PostMapping("")
    public Mono<ResponseEntity<Object>> addBlog(@RequestBody Blog blog) {
        return ReactiveSecurityContextHolder.getContext()
                .map(SecurityContext::getAuthentication)
                .flatMap(authentication -> {
                    if (authentication != null) {
                        String userId = authentication.getName(); // Get the user's ID or name
                        blog.setUserID(userId); // Set the user ID in the blog

                        // Assuming `blogService.addBlog(blog)` returns a Mono<Blog>
                        return Mono.just(ResponseMessage.createResponse("No authentication available", authentication, HttpStatus.UNAUTHORIZED));
                    } else {
                        return Mono.just(ResponseMessage.createResponse("No authentication available", null, HttpStatus.UNAUTHORIZED));
                    }
                });
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
        Blog blog = blogService.deleteBlog(blogID);
        if(blog != null){
            return ResponseMessage.createResponse("Delete blog successfully!", blog, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Blog isn't exist or there are some error in delete!", null, HttpStatus.OK);
    }
}
