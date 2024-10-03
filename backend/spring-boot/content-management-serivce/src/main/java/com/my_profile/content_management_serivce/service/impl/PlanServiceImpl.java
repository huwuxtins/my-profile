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

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;
    private final PlanPageRepository planPageRepository;

    public PlanServiceImpl(PlanRepository planRepository, PlanPageRepository planPageRepository) {
        this.planRepository = planRepository;
        this.planPageRepository = planPageRepository;
    }

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
    public Plan updatePlan(String id, Plan plan) {
        Optional<Plan> optionalPlan = this.planRepository.findById(id);
        if(optionalPlan.isPresent()){
            Plan presentPlan = optionalPlan.get();
            presentPlan.setContent(plan.getContent());
            presentPlan.setUpdatedAt(LocalDateTime.now());
            return planRepository.save(presentPlan);
        }
        return null;
    }

    @Override
    public Plan deletePlan(String id) {
        Plan plan = planRepository.findById(id).orElse(null);
        if(plan == null){
            return null;
        }
        try {
            planRepository.delete(plan);
            return plan;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
