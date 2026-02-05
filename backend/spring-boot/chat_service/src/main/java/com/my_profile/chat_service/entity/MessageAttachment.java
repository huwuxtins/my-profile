package com.my_profile.chat_service.entity;

import com.my_profile.chat_service.enums.FileType;
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

    @Column(name="file_url")
    private String fileUrl;

    @Column(name="file_type")
    @Enumerated(EnumType.STRING)
    private FileType fileType;

    @ManyToOne(
            fetch = FetchType.LAZY,
            optional = false
    )
    @JoinColumn(name = "message_id", nullable = false)
    private Message message;

    @Column(name="created_at")
    private Instant createdAt;

    @PrePersist
    @SuppressWarnings("unused")
    protected void onCreate() {
        this.createdAt = Instant.now();
    }
}
