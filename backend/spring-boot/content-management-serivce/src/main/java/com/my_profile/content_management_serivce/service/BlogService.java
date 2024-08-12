package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Blog;
import org.springframework.data.domain.Page;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.util.List;

public interface BlogService {
    public Mono<Blog> getBlogByID(String id);
    public Mono<Page<Blog>> getBlogsByUserID(String userID, int page, int size);
    public Mono<Page<Blog>> getBlogs(int page, int size);
    public Mono<Blog> addBlog(Blog blog);
    public Mono<Blog> updateBlog(Blog blog);
    public Mono<Void> deleteBlog(String id);
}
