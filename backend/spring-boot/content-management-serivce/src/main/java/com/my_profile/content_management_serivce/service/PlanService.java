package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.mapper.dto.PlanDto;

import java.util.List;

public interface PlanService {
    PlanDto getPlanById(String id);
    List<PlanDto> getPlansByUserId(String userId, int page, int size);
    List<PlanDto> getPlans(int page, int size);
    PlanDto addPlan(PlanDto plan) throws AccessDbException;
    PlanDto updatePlan(String id, PlanDto plan) throws AccessDbException;
    PlanDto deletePlan(String id) throws AccessDbException;
}
