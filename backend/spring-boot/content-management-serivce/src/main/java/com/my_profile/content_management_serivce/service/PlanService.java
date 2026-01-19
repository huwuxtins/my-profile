package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.mapper.dto.PlanDto;

import java.util.List;
import java.util.UUID;

public interface PlanService {
    PlanDto getPlanById(UUID id);
    List<PlanDto> getPlansByUserId(UUID userId, int page, int size);
    List<PlanDto> getPlans(int page, int size);
    PlanDto addPlan(PlanDto plan) throws AccessDbException;
    PlanDto updatePlan(UUID id, PlanDto plan) throws AccessDbException;
    PlanDto deletePlan(UUID id) throws AccessDbException;
}
