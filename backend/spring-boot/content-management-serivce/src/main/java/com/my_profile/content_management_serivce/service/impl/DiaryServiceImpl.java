package com.my_profile.content_management_serivce.service.impl;

import com.my_profile.content_management_serivce.entity.Diary;
import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.exception.ResourceNotFoundException;
import com.my_profile.content_management_serivce.mapper.DiaryMapper;
import com.my_profile.content_management_serivce.mapper.dto.DiaryDto;
import com.my_profile.content_management_serivce.repository.DiaryPageRepository;
import com.my_profile.content_management_serivce.repository.DiaryRepository;
import com.my_profile.content_management_serivce.service.DiaryService;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class DiaryServiceImpl implements DiaryService {

    private final DiaryRepository diaryRepository;
    private final DiaryPageRepository diaryPageRepository;
    private final DiaryMapper diaryMapper;

    public DiaryServiceImpl(DiaryRepository diaryRepository, DiaryPageRepository diaryPageRepository, DiaryMapper diaryMapper){
        this.diaryRepository = diaryRepository;
        this.diaryPageRepository = diaryPageRepository;
        this.diaryMapper = diaryMapper;
    }

    @Override
    public DiaryDto getDiaryByID(String id) {
        Optional<Diary> optionalDiary = this.diaryRepository.findById(id);
        if(optionalDiary.isPresent()){
            return this.diaryMapper.toDto(optionalDiary.get());
        }
        throw new ResourceNotFoundException("This diary isn't exist!");
    }

    @Override
    public List<DiaryDto> getDiariesByUserID(String userID, int page, int size) {
        Pageable pageable = PageRequest.of(page, size, Sort.Direction.DESC);

        return diaryPageRepository.findByUserID(userID, pageable)
                    .getContent()
                    .stream()
                    .map(diaryMapper::toDto)
                    .toList();
    }

    @Override
    public List<DiaryDto> getDiaries(int page, int size) {
        return null;
    }

    @Override
    public DiaryDto addDiary(DiaryDto diaryDto) throws AccessDbException {
        try {
            Diary diary = this.diaryMapper.toEntity(diaryDto);
            return this.diaryMapper.toDto(diaryRepository.insert(diary));
        } catch (Exception e){
            throw new AccessDbException("Add diary failed!");
        }
    }

    @Override
    public DiaryDto updateDiary(String id, DiaryDto diary) throws AccessDbException {
        Optional<Diary> optionalDiary = this.diaryRepository.findById(id);
        if(optionalDiary.isPresent()){
            Diary presentDiary = optionalDiary.get();
            presentDiary.setContent(diary.getContent());
            presentDiary.setUpdatedAt(LocalDateTime.now());
            try {
                return this.diaryMapper.toDto(this.diaryRepository.save(presentDiary));
            } catch (Exception e) {
                throw new AccessDbException("Update diary failed!");
            }
        }
        throw new ResourceNotFoundException("This diary isn't exist!");
    }

    @Override
    public DiaryDto deleteDiary(String id) throws AccessDbException {
        Diary diary = diaryRepository.findById(id).orElse(null);
        if(diary != null){
            try {
                diaryRepository.delete(diary);
                return this.diaryMapper.toDto(diary);
            } catch (Exception e){
                throw new AccessDbException("Delete diary failed!");
            }
        }
        throw new ResourceNotFoundException("This diary isn't exist!");
    }
}
