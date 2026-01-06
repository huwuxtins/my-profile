package com.my_profile.notification_service.mapper;

public interface BaseMapper<D, E> {
    D toDto(E entitty);
    E toEntity(D dto);
}
