package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Blog;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.reactive.ReactiveSortingRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;

@Repository
public interface BlogPageRepository extends ReactiveSortingRepository<Blog, String> {
    Flux<Blog> findByUserID(String userID, Pageable pageable);
}
