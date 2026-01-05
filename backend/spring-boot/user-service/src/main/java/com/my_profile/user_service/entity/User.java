package com.my_profile.user_service.entity;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonInclude;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import lombok.Builder;
import org.springframework.data.annotation.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity(name="user")
@Table(name="table")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @Column(name="userId")
    private String userId;

    @Column(name="username", nullable=false)
    private String username;

    @Column(name="firstName")
    private String firstName;

    @Column(name="lastName")
    private String lastName;
    private String email;

    @Column(name="phoneNumber", length=10)
    private String phoneNumber;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String avatar;

    @Column(name="bod")
    private Date bod;

    @Column(name="registeredAt")
    private Date registeredAt;
    private String major;
    private String description;
}
