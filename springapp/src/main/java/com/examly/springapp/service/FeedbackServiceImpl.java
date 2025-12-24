package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Feedback;
import com.examly.springapp.repository.FeedbackRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class FeedbackServiceImpl implements FeedbackService{
    FeedbackRepo feedbackRepo;
    UserRepo userRepo;

    @Autowired
    public FeedbackServiceImpl(FeedbackRepo feedbackRepo, UserRepo userRepo) {
        this.feedbackRepo = feedbackRepo;
        this.userRepo = userRepo;
    }

    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    @Override
    public boolean deleteFeedback(Long id) {
       Optional<Feedback> opFeedback = feedbackRepo.findById(id);
       if(opFeedback.isPresent()){
        feedbackRepo.delete(opFeedback.get());
        return true;
       }
       return false;
    }

    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }

    @Override
    public Feedback getFeedbackById(Long id) {
        Optional<Feedback> opFeedback = feedbackRepo.findById(id);
        if(opFeedback.isPresent()){
            return opFeedback.get();
        }
        return null;
    }

    @Override
    public List<Feedback> getFeedbacksByUserId(long userId) {
        List<Feedback> listFeedback = feedbackRepo.findByUserId(userId);
        if(listFeedback.isEmpty()){
            return null;
        }
        return listFeedback;
    }

}
