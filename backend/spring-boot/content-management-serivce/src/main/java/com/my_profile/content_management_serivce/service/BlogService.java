package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Blog;
import com.my_profile.content_management_serivce.exception.AccessDbException;

import java.util.List;

public interface BlogService {
    Blog getBlogByID(String id);
    List<Blog> getBlogsByUserID(String userID, int page, int size);
    List<Blog> getBlogs(int page, int size);
    Blog addBlog(Blog blog) throws AccessDbException;
    Blog updateBlog(String id, Blog blog) throws AccessDbException;
    Blog deleteBlog(String id) throws AccessDbException;
}
