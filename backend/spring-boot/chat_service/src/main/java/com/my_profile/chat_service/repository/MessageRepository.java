package com.my_profile.chat_service.repository;

import com.my_profile.chat_service.entity.Message;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MessageRepository extends JpaRepository<Message, UUID> {
    Page<Message> findByGroupId(UUID id, Pageable pageable);

    @Query(
            value = """
        SELECT *
        FROM messages m
        WHERE to_tsvector('english', m.content)
              @@ plainto_tsquery('english', :query)
        """,
            countQuery = """
        SELECT COUNT(*)
        FROM messages m
        WHERE to_tsvector('english', m.content)
              @@ plainto_tsquery('english', :query)
        """,
            nativeQuery = true
    )
    Page<Message> findMsgByContent(
            @Param("query") String query,
            Pageable pageable
    );
}
