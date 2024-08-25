package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogPageRepository extends PagingAndSortingRepository<Blog, String> {
    Page<Blog> findByUserID(String userID, Pageable pageable);
}
