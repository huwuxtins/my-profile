package com.my_profile.user_service.repository;

import com.my_profile.user_service.controller.User;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User, String> {
    Optional<User> findById(String id);
    Optional<User> findByUserID(String userID);
    List<User> findAll();
}
