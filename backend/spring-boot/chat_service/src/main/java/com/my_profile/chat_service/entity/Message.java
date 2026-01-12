package com.my_profile.chat_service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(
        name = "messages",
        indexes = {
                @Index(name = "idx_message_group_id", columnList = "group_id"),
                @Index(name = "idx_message_sender_id", columnList = "sender_id"),
                @Index(name = "idx_message_created_at", columnList = "created_at")
        }
)
public class Message {
    @Id
    @GeneratedValue
    @Column(nullable = false, updatable = false)
    private UUID id;

    @Column(name="sender_id")
    private String senderId;

    /**
     * Chat / Conversation / Group ID
     */
    @Column(name = "group_id", nullable = false)
    private String groupId;

    @Column(name = "content", nullable = false, length = 4000)
    private String content;

    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @Column(name = "edited_at")
    private Instant editedAt;

    @Column(name = "deleted_at")
    private Instant deletedAt;

    @Column(name="is_system")
    private boolean system;

    /**
     * Optimistic locking for concurrent edits
     */
    @Version
    private Long version;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }
}
