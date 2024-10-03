package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Diary;

import java.util.List;

public interface DiaryService {
    public Diary getDiaryByID(String id);
    public List<Diary> getDiariesByUserID(String userID, int page, int size);
    public List<Diary> getDiaries(int page, int size);
    public Diary addDiary(Diary Diary);
    public Diary updateDiary(String id, Diary Diary);
    public Diary deleteDiary(String id);
}
