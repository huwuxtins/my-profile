package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Plan;

import java.util.List;

public interface PlanService {
    public Plan getPlanByID(String id);
    public List<Plan> getPlansByUserID(String userID, int page, int size);
    public List<Plan> getPlans(int page, int size);
    public Plan addPlan(Plan Plan);
    public Plan updatePlan(Plan Plan);
    public Plan deletePlan(String id);
}
