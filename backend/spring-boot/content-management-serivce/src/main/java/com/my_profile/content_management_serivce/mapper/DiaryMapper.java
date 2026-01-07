package com.my_profile.content_management_serivce.mapper;

import com.my_profile.content_management_serivce.entity.Diary;
import com.my_profile.content_management_serivce.mapper.dto.DiaryDto;

public interface DiaryMapper extends BaseMapper<DiaryDto, Diary>{
    DiaryDto toDto(Diary diary);
    Diary toEntity(DiaryDto dto);
}
