package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Blog;
import org.springframework.data.domain.Page;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface BlogService {
    public Blog getBlogByID(String id);
    public List<Blog> getBlogsByUserID(String userID, int page, int size);
    public List<Blog> getBlogs(int page, int size);
    public Blog addBlog(Blog blog);
    public Blog updateBlog(Blog blog);
    public Blog deleteBlog(String id);
}
