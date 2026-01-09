package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.mapper.dto.BlogDto;

import java.util.List;

public interface BlogService {
    BlogDto getBlogById(String id);
    List<BlogDto> getBlogsByUserId(String userId, int page, int size);
    List<BlogDto> getBlogs(int page, int size);
    BlogDto addBlog(BlogDto blog) throws AccessDbException;
    BlogDto updateBlog(String id, BlogDto blog) throws AccessDbException;
    BlogDto deleteBlog(String id) throws AccessDbException;
}
