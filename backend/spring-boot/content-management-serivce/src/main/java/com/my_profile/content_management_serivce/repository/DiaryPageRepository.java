package com.my_profile.content_management_serivce.repository;

import com.my_profile.content_management_serivce.controller.Diary;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface DiaryPageRepository extends PagingAndSortingRepository<Diary, String> {
    Page<Diary> findByUserID(String userID, Pageable pageable);
}
