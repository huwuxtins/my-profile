package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Plan;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlanRepository extends MongoRepository<Plan, String> {
    Optional<Plan> findById(String id);
}
