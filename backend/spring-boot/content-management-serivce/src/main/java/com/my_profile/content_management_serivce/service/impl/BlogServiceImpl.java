package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.controller.Blog;
import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.exception.ResourceNotFoundException;
import com.my_profile.content_management_serivce.repository.BlogPageRepository;
import com.my_profile.content_management_serivce.repository.BlogRepository;
import com.my_profile.content_management_serivce.service.BlogService;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
        Optional<Blog> optionalBlog = this.blogRepository.findById(id);
        if(optionalBlog.isPresent()){
            return optionalBlog.get();
        }
        throw new ResourceNotFoundException("This blog isn't exist");
    }

    @Override
    public List<Blog> getBlogsByUserID(String userID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return blogPageRepository.findByUserID(userID, pageable).getContent();
    }

    @Override
    public List<Blog> getBlogs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return blogPageRepository.findAll(pageable).getContent();
    }

    @Override
    public Blog addBlog(Blog blog) throws AccessDbException {
        try {
            return blogRepository.insert(blog);
        } catch (Exception e){
            throw new AccessDbException("Add blog failed!");
        }
    }

    @Override
    public Blog updateBlog(String id, Blog blog) throws AccessDbException {
        Optional<Blog> optionalBlog = this.blogRepository.findById(id);
        if(optionalBlog.isPresent()){
            Blog presentBlog = optionalBlog.get();
            presentBlog.setContent(blog.getContent());
            presentBlog.setTitle(blog.getTitle());
            presentBlog.setUpdatedAt(LocalDateTime.now());
            try{
                return blogRepository.save(presentBlog);
            } catch (Exception e) {
                throw new AccessDbException("Update blog failed!");
            }
        }
        throw new ResourceNotFoundException("This blog isn't exist");
    }

    @Override
    public Blog deleteBlog(String id) throws AccessDbException {
        Blog blog = blogRepository.findById(id).orElse(null);
        if(blog != null){
            try {
                blogRepository.delete(blog);
                return blog;
            } catch (Exception e) {
                throw new AccessDbException("Delete blog failed1");
            }
        }
        throw new ResourceNotFoundException("This blog isn't exist");
    }
}
