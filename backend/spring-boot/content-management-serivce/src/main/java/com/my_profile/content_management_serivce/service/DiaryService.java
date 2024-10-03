package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Diary;

import java.util.List;

public interface DiaryService {
    Diary getDiaryByID(String id);
    List<Diary> getDiariesByUserID(String userID, int page, int size);
    List<Diary> getDiaries(int page, int size);
    Diary addDiary(Diary Diary);
    Diary updateDiary(String id, Diary Diary);
    Diary deleteDiary(String id);
}
