package com.my_profile.content_management_serivce.controller;

import com.my_profile.content_management_serivce.exception.AccessDbException;
import com.my_profile.content_management_serivce.exception.ResourceNotFoundException;
import com.my_profile.content_management_serivce.model.ResponseMessage;
import com.my_profile.content_management_serivce.service.DiaryService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/diary")
public class DiaryController {
    private final DiaryService diaryService;

    public DiaryController(DiaryService diaryService) {
        this.diaryService = diaryService;
    }

    @GetMapping("/profile")
    public ResponseEntity<Object> getDiaryByUserID(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication){
        String userID = authentication.getName();
        List<Diary> diary = diaryService.getDiariesByUserID(userID, page, size);

        if(diary.isEmpty()){
            throw new ResourceNotFoundException("There aren't any diary in your profile!");
        }
        return ResponseMessage.createResponse("Get diary by profile successfully!", diary, HttpStatus.OK);
    }

    @GetMapping("/{diaryID}")
    public ResponseEntity<Object> getDiaryByID(@PathVariable String diaryID){
        Diary diary = diaryService.getDiaryByID(diaryID);
        return ResponseMessage.createResponse("Get diary successfully!", diary, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Object> addDiary(@RequestBody Diary diary) throws AccessDbException {
        Diary addedDiary = diaryService.addDiary(diary);
        if(addedDiary != null){
            return ResponseMessage.createResponse("Add diary successfully!", addedDiary, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Add diary failed!", null, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> updateDiary(@PathVariable String id, @RequestBody Diary diary) throws AccessDbException {
        Diary updateDiary = diaryService.updateDiary(id, diary);
        if(updateDiary != null){
            return ResponseMessage.createResponse("Update diary successfully!", updateDiary, HttpStatus.CREATED);
        }
        throw new ResourceNotFoundException("This diary isn't exist!");
    }

    @DeleteMapping("/{diaryID}")
    public ResponseEntity<Object> deleteDiary(@PathVariable String diaryID) throws AccessDbException {
        Diary diary = diaryService.deleteDiary(diaryID);
        if(diary != null){
            return ResponseMessage.createResponse("Delete diary successfully!", diary, HttpStatus.OK);
        }
        throw new ResourceNotFoundException("This diary isn't exist!");
    }
}
