package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.controller.Plan;
import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.repository.PlanPageRepository;
import com.my_profile.content_management_serivce.repository.PlanRepository;
import com.my_profile.content_management_serivce.service.PlanService;
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
    public Plan addPlan(Plan plan) throws AccessDbException {
        try {
            return planRepository.insert(plan);
        } catch (Exception e){
            throw new AccessDbException("Add plan failed!");
        }
    }

    @Override
    public Plan updatePlan(String id, Plan plan) throws AccessDbException{
        Optional<Plan> optionalPlan = this.planRepository.findById(id);
        if(optionalPlan.isPresent()){
            Plan presentPlan = optionalPlan.get();
            presentPlan.setContent(plan.getContent());
            presentPlan.setUpdatedAt(LocalDateTime.now());
            try{
                return planRepository.save(presentPlan);
            } catch (Exception e){
                throw new AccessDbException("Update plan failed!");
            }
        }
        return null;
    }

    @Override
    public Plan deletePlan(String id) throws AccessDbException {
        Plan plan = planRepository.findById(id).orElse(null);
        if(plan != null){
            try {
                planRepository.delete(plan);
                return plan;
            } catch (Exception e){
                throw new AccessDbException("Delete plan failed!");
            }
        }
        return null;
    }
}
