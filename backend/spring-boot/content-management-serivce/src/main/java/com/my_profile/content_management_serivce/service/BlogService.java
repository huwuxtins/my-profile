package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.mapper.dto.BlogDto;

import java.util.List;
import java.util.UUID;

public interface BlogService {
    BlogDto getBlogById(UUID id);
    List<BlogDto> getBlogsByUserId(UUID userId, int page, int size);
    List<BlogDto> getBlogs(int page, int size);
    BlogDto addBlog(BlogDto blog) throws AccessDbException;
    BlogDto updateBlog(UUID id, BlogDto blog) throws AccessDbException;
    BlogDto deleteBlog(UUID id) throws AccessDbException;
}
