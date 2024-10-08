package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Plan;
import com.my_profile.content_management_serivce.exception.AccessDbException;

import java.util.List;

public interface PlanService {
    Plan getPlanByID(String id);
    List<Plan> getPlansByUserID(String userID, int page, int size);
    List<Plan> getPlans(int page, int size);
    Plan addPlan(Plan Plan) throws AccessDbException;
    Plan updatePlan(String id, Plan Plan) throws AccessDbException;
    Plan deletePlan(String id) throws AccessDbException;
}
