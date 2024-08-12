package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Blog;
import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface BlogRepository extends ReactiveMongoRepository<Blog, String> {
    Mono<Blog> findById(String id);
}
