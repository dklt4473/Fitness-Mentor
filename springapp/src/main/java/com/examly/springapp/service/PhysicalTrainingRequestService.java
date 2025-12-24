package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;


import com.examly.springapp.model.PhysicalTrainingRequest;

public interface PhysicalTrainingRequestService {

    List<PhysicalTrainingRequest> getAllPhysicalTrainingRequests();
    List<PhysicalTrainingRequest> getPhysicalTrainingRequestsByUserId(long userId);
    Optional<PhysicalTrainingRequest> getPhysicalTrainingRequestById(long requestId);
    PhysicalTrainingRequest addPhysicalTrainingRequest(PhysicalTrainingRequest request);
    PhysicalTrainingRequest updatePhysicalTrainingRequest(long requestId, PhysicalTrainingRequest request);
    boolean deletePhysicalTrainingRequest(long requestId);
     
}
