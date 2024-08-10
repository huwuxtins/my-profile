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
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Object> addBlog(@RequestBody Blog blog, @AuthenticationPrincipal OidcUser authentication){
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        if (authentication == null || !authentication.isAuthenticated())
//        {
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized access");
//        }
//
        // Access user information from authentication
        String userId = authentication.getName();
        System.out.println(userId);
        String user = authentication.getAttribute("sub");
        blog.setUserID(user);

        Blog addedBlog = blogService.addBlog(blog);
        if(addedBlog != null){
            return ResponseMessage.createResponse("Add blog successfully!", addedBlog, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Add blog failed!", null, HttpStatus.BAD_REQUEST);
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
