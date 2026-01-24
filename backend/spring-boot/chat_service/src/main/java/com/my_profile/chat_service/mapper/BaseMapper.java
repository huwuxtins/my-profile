package com.my_profile.chat_service.mapper;

public interface BaseMapper<D, E> {
    D toDto(E entity);
    E toEntity(D dto);
}
