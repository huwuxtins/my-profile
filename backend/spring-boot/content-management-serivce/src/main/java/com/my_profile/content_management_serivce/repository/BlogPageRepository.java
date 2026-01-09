package com.my_profile.content_management_serivce.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.my_profile.content_management_serivce.entity.Blog;

@Repository
public interface BlogPageRepository extends PagingAndSortingRepository<Blog, String> {
    Page<Blog> findByUserId(String userId, Pageable pageable);
}
