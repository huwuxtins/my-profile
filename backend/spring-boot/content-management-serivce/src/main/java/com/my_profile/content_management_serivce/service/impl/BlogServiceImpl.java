package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.entity.Blog;
import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.exception.ResourceNotFoundException;
import com.my_profile.content_management_serivce.mapper.BlogMapper;
import com.my_profile.content_management_serivce.mapper.dto.BlogDto;
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
    private final BlogMapper blogMapper;

    public BlogServiceImpl(BlogRepository blogRepository, BlogPageRepository blogPageRepository, BlogMapper blogMapper) {
        this.blogRepository = blogRepository;
        this.blogPageRepository = blogPageRepository;
        this.blogMapper = blogMapper;
    }

    @Override
    public BlogDto getBlogById(String id) {
        Optional<Blog> optionalBlog = this.blogRepository.findById(id);
        if(optionalBlog.isPresent()){
            return this.blogMapper.toDto(optionalBlog.get());
        }
        throw new ResourceNotFoundException("This blog isn't exist!");
    }

    @Override
    public List<BlogDto> getBlogsByUserId(String userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return this.blogPageRepository.findByUserId(userId, pageable)
                .getContent()
                .stream()
                .map(this.blogMapper::toDto)
                .toList();
    }

    @Override
    public List<BlogDto> getBlogs(int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC, "createdAt");
        return this.blogPageRepository.findAll(pageable)
                .getContent()
                .stream()
                .map(this.blogMapper::toDto)
                .toList();
    }

    @Override
    public BlogDto addBlog(BlogDto blogDto) throws AccessDbException {
        try {
            Blog blog = this.blogMapper.toEntity(blogDto);
            return this.blogMapper.toDto(this.blogRepository.insert(blog));
        } catch (Exception e){
            throw new AccessDbException("Add blog failed!");
        }
    }

    @Override
    public BlogDto updateBlog(String id, BlogDto blog) throws AccessDbException {
        Optional<Blog> optionalBlog = this.blogRepository.findById(id);
        if(optionalBlog.isPresent()){
            Blog presentBlog = optionalBlog.get();
            presentBlog.setContent(blog.getContent());
            presentBlog.setTitle(blog.getTitle());
            presentBlog.setUpdatedAt(LocalDateTime.now());
            try{
                return this.blogMapper.toDto(this.blogRepository.save(presentBlog));
            } catch (Exception e) {
                throw new AccessDbException("Update blog failed!");
            }
        }
        throw new ResourceNotFoundException("This blog isn't exist!");
    }

    @Override
    public BlogDto deleteBlog(String id) throws AccessDbException {
        Blog blog = this.blogRepository.findById(id).orElse(null);
        if(blog != null){
            try {
                this.blogRepository.delete(blog);
                return this.blogMapper.toDto(blog);
            } catch (Exception e) {
                throw new AccessDbException("Delete blog failed!");
            }
        }
        throw new ResourceNotFoundException("This blog isn't exist!");
    }
}
