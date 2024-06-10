package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Blog;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BlogRepository extends MongoRepository<Blog, String> {
    Optional<Blog> findById(String id);
}
