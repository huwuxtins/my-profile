package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Plan;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanPageRepository extends PagingAndSortingRepository<Plan, String> {
    Page<Plan> findByUserID(String userID, Pageable pageable);
}
