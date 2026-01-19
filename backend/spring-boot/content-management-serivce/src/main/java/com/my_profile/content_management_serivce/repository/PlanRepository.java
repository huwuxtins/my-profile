package com.my_profile.content_management_serivce.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.my_profile.content_management_serivce.entity.Plan;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface PlanRepository extends MongoRepository<Plan, UUID> {
    Optional<Plan> findById(UUID id);
}
