package com.my_profile.content_management_serivce.controller;

import com.my_profile.content_management_serivce.model.ResponseMessage;
import com.my_profile.content_management_serivce.service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/plan")
public class PlanController {

    @Autowired
    private PlanService planService;

    @GetMapping("/profile")
    public ResponseEntity<Object> getPlanByUserID(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @AuthenticationPrincipal OidcUser authentication){
        String userID = authentication.getAttribute("sub");
        List<Plan> plan = planService.getPlansByUserID(userID, page, size);

        if(plan.isEmpty()){
            return ResponseMessage.createResponse("There aren't any plan in your profile!", plan, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get plan by profile successfully!", plan, HttpStatus.OK);
    }

    @GetMapping("/{planID}")
    public ResponseEntity<Object> getPlanByID(@PathVariable String planID){
        Plan plan = planService.getPlanByID(planID);
        if(plan == null){
            return ResponseMessage.createResponse("This plan isn't exist", null, HttpStatus.NOT_FOUND);
        }
        return ResponseMessage.createResponse("Get plan successfully!", plan, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Object> addPlan(@RequestBody Plan plan, @AuthenticationPrincipal OidcUser authentication){
        Plan addedPlan = planService.addPlan(plan);
        if(addedPlan != null){
            return ResponseMessage.createResponse("Add plan successfully!", addedPlan, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Add plan failed!", null, HttpStatus.BAD_REQUEST);
    }

    @PutMapping("")
    public ResponseEntity<Object> updatePlan(@RequestBody Plan plan, @AuthenticationPrincipal OidcUser authentication){
        Plan updatePlan = planService.updatePlan(plan);
        if(updatePlan != null){
            return ResponseMessage.createResponse("Update plan successfully!", updatePlan, HttpStatus.CREATED);
        }
        return ResponseMessage.createResponse("Update plan failed!", null, HttpStatus.BAD_REQUEST);
    }

    @DeleteMapping("/{planID}")
    public ResponseEntity<Object> deletePlan(@PathVariable String planID){
        Plan Plan = planService.deletePlan(planID);
        if(Plan != null){
            return ResponseMessage.createResponse("Delete plan successfully!", Plan, HttpStatus.OK);
        }
        return ResponseMessage.createResponse("Plan isn't exist or there are some error in delete!", null, HttpStatus.OK);
    }
}
