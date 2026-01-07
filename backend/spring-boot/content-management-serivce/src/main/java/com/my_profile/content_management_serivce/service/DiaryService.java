package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.mapper.dto.DiaryDto;

import java.util.List;

public interface DiaryService {
    DiaryDto getDiaryByID(String id);
    List<DiaryDto> getDiariesByUserID(String userID, int page, int size);
    List<DiaryDto> getDiaries(int page, int size);
    DiaryDto addDiary(DiaryDto Diary) throws AccessDbException;
    DiaryDto updateDiary(String id, DiaryDto Diary) throws AccessDbException;
    DiaryDto deleteDiary(String id) throws AccessDbException;
}
