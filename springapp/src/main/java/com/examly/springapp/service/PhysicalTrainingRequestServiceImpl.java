package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.PhysicalTrainingRequest;
import com.examly.springapp.repository.PhysicalTrainingRequestRepo;
import com.examly.springapp.repository.UserRepo;

@Service
public class PhysicalTrainingRequestServiceImpl implements PhysicalTrainingRequestService {

    private final PhysicalTrainingRequestRepo physicalTrainingRequestRepo;
    private final UserRepo userRepo;

    @Autowired
    public PhysicalTrainingRequestServiceImpl(PhysicalTrainingRequestRepo physicalTrainingRequestRepo,
            UserRepo userRepo) {
        this.physicalTrainingRequestRepo = physicalTrainingRequestRepo;
        this.userRepo = userRepo;
    }

    @Override
    public PhysicalTrainingRequest addPhysicalTrainingRequest(PhysicalTrainingRequest request) {
        return physicalTrainingRequestRepo.save(request);
    }

    @Override
    public boolean deletePhysicalTrainingRequest(long requestId) {
        Optional<PhysicalTrainingRequest> opt = physicalTrainingRequestRepo.findById(requestId);
        if (opt.isPresent()) {
            physicalTrainingRequestRepo.delete(opt.get());
            return true;
        }
        return false;
    }

    @Override
    public List<PhysicalTrainingRequest> getAllPhysicalTrainingRequests() {
        return physicalTrainingRequestRepo.findAll();
    }

    @Override
    public Optional<PhysicalTrainingRequest> getPhysicalTrainingRequestById(long requestId) {
        return physicalTrainingRequestRepo.findById(requestId);
    }

    @Override
    public List<PhysicalTrainingRequest> getPhysicalTrainingRequestsByUserId(long userId) {
        List<PhysicalTrainingRequest> list = physicalTrainingRequestRepo.findByUserId(userId);
        return list;
    }

    @Override
    public PhysicalTrainingRequest updatePhysicalTrainingRequest(long requestId, PhysicalTrainingRequest request) {
        Optional<PhysicalTrainingRequest> opt = physicalTrainingRequestRepo.findById(requestId);
        if (opt.isPresent()) {
            PhysicalTrainingRequest existingRequest = opt.get();
            existingRequest.setStatus(request.getStatus());
            existingRequest.setRejectionReason(request.getRejectionReason());
            existingRequest.setHealthConditions(request.getHealthConditions());
            existingRequest.setFitnessGoals(request.getFitnessGoals());
            existingRequest.setComments(request.getComments());
            // Update other fields if necessary
            return physicalTrainingRequestRepo.save(existingRequest);
        }
        return null;
    }
}
