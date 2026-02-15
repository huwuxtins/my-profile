package com.my_profile.chat_service.repository;

import com.my_profile.chat_service.entity.MessageAttachment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MessageAttachmentRepository extends JpaRepository<MessageAttachment, UUID> {
    @Query("""
        SELECT a
        FROM MessageAttachment a
        WHERE a.message.groupId = :groupId
    """)
    Page<MessageAttachment> findByMessage_GroupId(
            @Param("groupId") UUID groupId,
            Pageable pageable
    );
}
