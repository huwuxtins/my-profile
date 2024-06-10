package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.controller.Plan;
import com.my_profile.content_management_serivce.repository.PlanPageRepository;
import com.my_profile.content_management_serivce.repository.PlanRepository;
import com.my_profile.content_management_serivce.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {
    @Autowired
    private PlanRepository planRepository;
    @Autowired
    private PlanPageRepository planPageRepository;

    @Override
    public Plan getPlanByID(String id) {
        return planRepository.findById(id).orElse(null);
    }

    @Override
    public List<Plan> getPlansByUserID(String userID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);

        return planPageRepository.findByUserID(userID, pageable).getContent();
    }

    @Override
    public List<Plan> getPlans(int page, int size) {
        return null;
    }

    @Override
    public Plan addPlan(Plan plan) {
        try {
            return planRepository.insert(plan);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Plan updatePlan(Plan plan) {
        try {
            return planRepository.save(plan);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Plan deletePlan(Plan plan) {
        try {
            planRepository.delete(plan);
            return plan;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
