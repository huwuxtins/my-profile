package com.my_profile.chat_service.repository;

import com.my_profile.chat_service.entity.GroupMember;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface GroupMemberRepository extends JpaRepository<GroupMember, UUID> {
    // Check
    boolean existsByGroupIdAndUserId(UUID groupId, UUID userId);

    Optional<GroupMember> findByGroupIdAndUserId(UUID groupId, UUID userId);
    Page<GroupMember> findByGroupId(UUID groupId, Pageable pageable);
    Page<GroupMember> findByUserId(UUID userId, Pageable pageable);

    // Deletions
    void deleteByGroupIdAndUserId(UUID groupId, UUID userId);
}
