package com.my_profile.chat_service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;
import java.util.UUID;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(
        name = "attachments",
        indexes = {
                @Index(name = "idx_attachment_message_id", columnList = "message_id")
        }
)
public class MessageAttachment {
    @Id
    @GeneratedValue
    @Column(nullable = false, updatable = false)
    private UUID id;

    @Column(name="message_id")
    private UUID messageId;

    @Column(name="file_url")
    private String fileUrl;

    @Column(name="file_type")
    private String fileType;

    @Column(name="created_at")
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }
}
