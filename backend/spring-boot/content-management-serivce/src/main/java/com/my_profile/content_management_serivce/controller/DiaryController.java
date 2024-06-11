package com.my_profile.content_management_serivce.controller;

import com.my_profile.content_management_serivce.model.ResponseMessage;
import com.my_profile.content_management_serivce.service.DiaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/diary")
public class DiaryController {
    @Autowired
    private DiaryService diaryService;

    @GetMapping("/profile")
    public ResponseEntity<Object> getDiaryByUserID(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @AuthenticationPrincipal OidcUser authentication){
        String userID = authentication.getAttribute("sub");
        List<Diary> diary = diaryService.getDiariesByUserID(userID, page, size);

        if(diary.isEmpty()){
            return ResponseMessage.createResponse("There aren't any diary in your profile!", diary, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get diary by profile successfully!", diary, HttpStatus.OK);
    }

    @GetMapping("/{diaryID}")
    public ResponseEntity<Object> getDiaryByID(@PathVariable String diaryID){
        Diary diary = diaryService.getDiaryByID(diaryID);
        if(diary == null){
            return ResponseMessage.createResponse("This diary isn't exist", null, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get diary successfully!", diary, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Object> addDiary(@RequestBody Diary diary, @AuthenticationPrincipal OidcUser authentication){
        Diary addedDiary = diaryService.addDiary(diary);
        if(addedDiary != null){
            return ResponseMessage.createResponse("Add diary successfully!", addedDiary, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Add diary failed!", null, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("")
    public ResponseEntity<Object> updateDiary(@RequestBody Diary diary, @AuthenticationPrincipal OidcUser authentication){
        Diary updateDiary = diaryService.updateDiary(diary);
        if(updateDiary != null){
            return ResponseMessage.createResponse("Update diary successfully!", updateDiary, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Update diary failed!", null, HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{diaryID}")
    public ResponseEntity<Object> deleteDiary(@PathVariable String diaryID){
        Diary diary = diaryService.deleteDiary(diaryID);
        if(diary != null){
            return ResponseMessage.createResponse("Delete diary successfully!", diary, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Diary isn't exist or there are some error in delete!", null, HttpStatus.OK);
    }
}
