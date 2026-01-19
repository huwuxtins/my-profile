package com.my_profile.content_management_serivce.service;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.mapper.dto.DiaryDto;

import java.util.List;
import java.util.UUID;

public interface DiaryService {
    DiaryDto getDiaryById(UUID id);
    List<DiaryDto> getDiariesByUserId(UUID userId, int page, int size);
    List<DiaryDto> getDiaries(int page, int size);
    DiaryDto addDiary(DiaryDto Diary) throws AccessDbException;
    DiaryDto updateDiary(UUID id, DiaryDto Diary) throws AccessDbException;
    DiaryDto deleteDiary(UUID id) throws AccessDbException;
}
