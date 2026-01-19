package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.entity.Plan;
import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.exception.ResourceNotFoundException;
import com.my_profile.content_management_serivce.mapper.PlanMapper;
import com.my_profile.content_management_serivce.mapper.dto.PlanDto;
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
import java.util.UUID;

@Service
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;
    private final PlanPageRepository planPageRepository;
    private final PlanMapper planMapper;

    public PlanServiceImpl(PlanRepository planRepository, PlanPageRepository planPageRepository, PlanMapper planMapper) {
        this.planRepository = planRepository;
        this.planPageRepository = planPageRepository;
        this.planMapper = planMapper;
    }

    @Override
    public PlanDto getPlanById(UUID id) {
        Optional<Plan> optionalPlan = this.planRepository.findById(id);
        if(optionalPlan.isPresent()) {
             return this.planMapper.toDto(optionalPlan.get());
        }
        throw new ResourceNotFoundException("This plan isn't exist!");
    }

    @Override
    public List<PlanDto> getPlansByUserId(UUID userId, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);

        return this.planPageRepository.findByUserId(userId, pageable)
                    .getContent()
                    .stream()
                    .map(this.planMapper::toDto)
                    .toList();
    }

    @Override
    public List<PlanDto> getPlans(int page, int size) {
        return null;
    }

    @Override
    public PlanDto addPlan(PlanDto planDto) throws AccessDbException {
        try {
            Plan plan = this.planMapper.toEntity(planDto);
            return this.planMapper.toDto(this.planRepository.insert(plan));
        } catch (Exception e){
            throw new AccessDbException("Add plan failed!");
        }
    }

    @Override
    public PlanDto updatePlan(UUID id, PlanDto plan) throws AccessDbException{
        Optional<Plan> optionalPlan = this.planRepository.findById(id);
        if(optionalPlan.isPresent()){
            Plan presentPlan = optionalPlan.get();
            presentPlan.setContent(plan.getContent());
            presentPlan.setUpdatedAt(LocalDateTime.now());
            try{
                return this.planMapper.toDto(this.planRepository.save(presentPlan));
            } catch (Exception e){
                throw new AccessDbException("Update plan failed!");
            }
        }
        return null;
    }

    @Override
    public PlanDto deletePlan(UUID id) throws AccessDbException {
        Plan plan = this.planRepository.findById(id).orElse(null);
        if(plan != null){
            try {
                this.planRepository.delete(plan);
                return this.planMapper.toDto(plan);
            } catch (Exception e){
                throw new AccessDbException("Delete plan failed!");
            }
        }
        return null;
    }
}
