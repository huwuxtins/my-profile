package com.my_profile.content_management_serivce.mapper;

public interface BaseMapper<D, E> {
    D toDto(E entitty);
    E toEntity(D dto);
}
