package com.my_profile.user_service.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name="user_id")
    private String userId;

    @Column(name="username", nullable=false)
    private String username;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;
    private String email;

    @Column(name="phone_number", length=10)
    private String phoneNumber;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String avatar;

    @Column(name="bod")
    private Date bod;

    @Column(name="registered_at")
    private Date registeredAt;
    private String major;
    private String description;
}
