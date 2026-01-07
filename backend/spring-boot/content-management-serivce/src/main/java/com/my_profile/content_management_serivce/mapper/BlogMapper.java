package com.my_profile.content_management_serivce.mapper;

import org.mapstruct.Mapper;

import com.my_profile.content_management_serivce.entity.Blog;
import com.my_profile.content_management_serivce.mapper.dto.BlogDto;

@Mapper(componentModel = "spring")
public interface BlogMapper extends BaseMapper<BlogDto, Blog>{
    BlogDto toDto(Blog blog);
    Blog toEntity(BlogDto dto);
}
