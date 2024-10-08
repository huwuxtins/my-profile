package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.controller.Diary;
import com.my_profile.content_management_serivce.exception.AccessDbException;

import java.util.List;

public interface DiaryService {
    Diary getDiaryByID(String id);
    List<Diary> getDiariesByUserID(String userID, int page, int size);
    List<Diary> getDiaries(int page, int size);
    Diary addDiary(Diary Diary) throws AccessDbException;
    Diary updateDiary(String id, Diary Diary) throws AccessDbException;
    Diary deleteDiary(String id) throws AccessDbException;
}
