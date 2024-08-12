package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.controller.Blog;
import com.my_profile.content_management_serivce.repository.BlogPageRepository;
import com.my_profile.content_management_serivce.repository.BlogRepository;
import com.my_profile.content_management_serivce.service.BlogService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

@Service
public class BlogServiceImpl implements BlogService {
    private final BlogRepository blogRepository;

    private final BlogPageRepository blogPageRepository;

    public BlogServiceImpl(BlogRepository blogRepository, BlogPageRepository blogPageRepository) {
        this.blogRepository = blogRepository;
        this.blogPageRepository = blogPageRepository;
    }

    @Override
    public Mono<Blog> getBlogByID(String id) {
        return blogRepository.findById(id);
    }

    @Override
    public Mono<Page<Blog>> getBlogsByUserID(String userID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);

        return blogPageRepository.findByUserID(userID, pageable).collectList().map(content -> new PageImpl<>(content, pageable, content.size()));
    }

    @Override
    public Mono<Page<Blog>> getBlogs(int page, int size) {
        return null;
    }

    @Override
    public Mono<Blog> addBlog(Blog blog) {
        try {
            return blogRepository.insert(blog);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Mono<Blog> updateBlog(Blog blog) {
        try {
            return blogRepository.save(blog);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Mono<Void> deleteBlog(String id) {
        return blogRepository.deleteById(id);
    }
}
