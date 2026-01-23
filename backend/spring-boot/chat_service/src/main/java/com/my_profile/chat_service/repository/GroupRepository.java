package com.my_profile.chat_service.repository;

import com.my_profile.chat_service.entity.Group;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface GroupRepository extends JpaRepository<Group, UUID> {
    Optional<Group> findByName(String name);

    @Query("""
            SELECT g
            FROM Groups g
            WHERE g.createdAt >= :createdAt
            """)
    Page<Group> findAllAfterCreatedAt(
            @Param("createdAt") Instant createdAt,
            Pageable pageable
    );

    Page<Group> findByUserId(UUID userId, Pageable pageable);
}
