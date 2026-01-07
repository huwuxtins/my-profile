package com.my_profile.content_management_serivce.mapper;

import com.my_profile.content_management_serivce.entity.Plan;
import com.my_profile.content_management_serivce.mapper.dto.PlanDto;

public interface PlanMapper extends BaseMapper<PlanDto, Plan>{
    PlanDto toDto(Plan plan);
    Plan toEntity(PlanDto dto);
}
