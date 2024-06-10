package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Diary;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiaryRepository extends MongoRepository<Diary, String> {
    Optional<Diary> findById(String id);
}
