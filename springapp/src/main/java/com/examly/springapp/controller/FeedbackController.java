package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.service.FeedbackServiceImpl;

@RestController
@RequestMapping("/api/feedback")
public class FeedbackController {

    FeedbackServiceImpl feedbackServiceImpl;

    @Autowired
    public FeedbackController(FeedbackServiceImpl feedbackServiceImpl) {
        this.feedbackServiceImpl = feedbackServiceImpl;
    }

    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){
        Feedback f = feedbackServiceImpl.createFeedback(feedback);
        if(f == null){
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.status(201).body(f);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable long id){
        Feedback feedback = feedbackServiceImpl.getFeedbackById(id);
        if(feedback == null) {
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(feedback);
    }

    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks(){
        List<Feedback> feedback = feedbackServiceImpl.getAllFeedbacks();
        return ResponseEntity.status(200).body(feedback);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Feedback>> getFeedbacksByUserId(@PathVariable long userId){
        List<Feedback> feedback = feedbackServiceImpl.getFeedbacksByUserId(userId);
        if(feedback.isEmpty()){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.status(200).body(feedback);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFeedback(@PathVariable long id){
        boolean feedback = feedbackServiceImpl.deleteFeedback(id);
        if(feedback){
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(404).build();
    }

}
