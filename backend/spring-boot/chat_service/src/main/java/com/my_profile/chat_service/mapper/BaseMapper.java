package com.my_profile.chat_service.mapper;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

public interface BaseMapper<D, E> {
    D toDto(E entity);
    E toEntity(D dto);

    default List<D> toDtoList(List<E> entities) {
        if (entities == null) return Collections.emptyList();
        return entities.stream()
                .filter(Objects::nonNull)
                .map(this::toDto)
                .collect(Collectors.toList());
    }

    default List<E> toEntityList(List<D> dtos) {
        if (dtos == null) return Collections.emptyList();
        return dtos.stream()
                .filter(Objects::nonNull)
                .map(this::toEntity)
                .collect(Collectors.toList());
    }
}
