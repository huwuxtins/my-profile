package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.controller.Diary;
import com.my_profile.content_management_serivce.repository.DiaryPageRepository;
import com.my_profile.content_management_serivce.repository.DiaryRepository;
import com.my_profile.content_management_serivce.service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiaryServiceImpl implements DiaryService {
    @Autowired
    private DiaryRepository diaryRepository;
    @Autowired
    private DiaryPageRepository diaryPageRepository;

    @Override
    public Diary getDiaryByID(String id) {
        return diaryRepository.findById(id).orElse(null);
    }

    @Override
    public List<Diary> getDiariesByUserID(String userID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);

        return diaryPageRepository.findByUserID(userID, pageable).getContent();
    }

    @Override
    public List<Diary> getDiaries(int page, int size) {
        return null;
    }

    @Override
    public Diary addDiary(Diary diary) {
        try {
            return diaryRepository.insert(diary);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Diary updateDiary(Diary diary) {
        try {
            return diaryRepository.save(diary);
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public Diary deleteDiary(Diary diary) {
        try {
            diaryRepository.delete(diary);
            return diary;
        } catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }
}
