package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Plan;

import java.util.List;

public interface PlanService {
    Plan getPlanByID(String id);
    List<Plan> getPlansByUserID(String userID, int page, int size);
    List<Plan> getPlans(int page, int size);
    Plan addPlan(Plan Plan);
    Plan updatePlan(String id, Plan Plan);
    Plan deletePlan(String id);
}
