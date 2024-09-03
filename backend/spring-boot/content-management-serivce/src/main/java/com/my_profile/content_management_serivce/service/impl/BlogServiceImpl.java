package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.controller.Blog;
import com.my_profile.content_management_serivce.repository.BlogPageRepository;
import com.my_profile.content_management_serivce.repository.BlogRepository;
import com.my_profile.content_management_serivce.service.BlogService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogServiceImpl implements BlogService {
    private final BlogRepository blogRepository;

    private final BlogPageRepository blogPageRepository;

    public BlogServiceImpl(BlogRepository blogRepository, BlogPageRepository blogPageRepository) {
        this.blogRepository = blogRepository;
        this.blogPageRepository = blogPageRepository;
    }

    @Override
    public Blog getBlogByID(String id) {
        return blogRepository.findById(id).orElse(null);
    }

    @Override
    public List<Blog> getBlogsByUserID(String userID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");

        return blogPageRepository.findByUserID(userID, pageable).getContent();
    }

    @Override
    public List<Blog> getBlogs(int page, int size) {
        return null;
    }

    @Override
    public Blog addBlog(Blog blog) {
        try {
            return blogRepository.insert(blog);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Blog updateBlog(Blog blog) {
        try {
            return blogRepository.save(blog);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Blog deleteBlog(String id) {
        Blog blog = blogRepository.findById(id).orElse(null);
        if(blog == null){
            return null;
        }
        try {
            blogRepository.delete(blog);
            return blog;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
