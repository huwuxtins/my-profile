package com.my_profile.content_management_serivce.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.my_profile.content_management_serivce.entity.Plan;

import java.util.UUID;

@Repository
public interface PlanPageRepository extends PagingAndSortingRepository<Plan, UUID> {
    Page<Plan> findByUserId(UUID userId, Pageable pageable);
}
