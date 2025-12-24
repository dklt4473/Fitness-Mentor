package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.PhysicalTrainingRequest;
import com.examly.springapp.service.PhysicalTrainingRequestServiceImpl;

@RestController
@RequestMapping("/api/physical-training-request")
public class PhysicalTrainingRequestController {

    private final PhysicalTrainingRequestServiceImpl physicalTrainingRequestServiceImpl;

    @Autowired
    public PhysicalTrainingRequestController(PhysicalTrainingRequestServiceImpl physicalTrainingRequestServiceImpl) {
        this.physicalTrainingRequestServiceImpl = physicalTrainingRequestServiceImpl;
    }

    @PostMapping
    public ResponseEntity<PhysicalTrainingRequest> saveRequest(@RequestBody PhysicalTrainingRequest request) {
        PhysicalTrainingRequest newRequest = physicalTrainingRequestServiceImpl.addPhysicalTrainingRequest(request);
        if (newRequest != null) {
            return ResponseEntity.status(201).body(newRequest);
        }
        return ResponseEntity.status(401).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<PhysicalTrainingRequest>> getById(@PathVariable long id) {
        Optional<PhysicalTrainingRequest> newRequest = physicalTrainingRequestServiceImpl
                .getPhysicalTrainingRequestById(id);
        if (newRequest.isPresent()) {
            return ResponseEntity.status(200).body(newRequest);
        }
        return ResponseEntity.status(404).build();
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PhysicalTrainingRequest>> getByUserId(@PathVariable long userId) {
        List<PhysicalTrainingRequest> newRequest = physicalTrainingRequestServiceImpl
                .getPhysicalTrainingRequestsByUserId(userId);
        // if (newRequest == null || newRequest.isEmpty()) {
        // return ResponseEntity.status(404).build();
        // }
        return ResponseEntity.status(200).body(newRequest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PhysicalTrainingRequest> updateById(@PathVariable long id,
            @RequestBody PhysicalTrainingRequest request) {
        PhysicalTrainingRequest newRequest = physicalTrainingRequestServiceImpl.updatePhysicalTrainingRequest(id,
                request);
        if (newRequest != null) {
            return ResponseEntity.status(200).body(newRequest);
        }
        return ResponseEntity.status(404).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable long id) {
        boolean newRequest = physicalTrainingRequestServiceImpl.deletePhysicalTrainingRequest(id);
        if (newRequest) {
            return ResponseEntity.status(200).build();
        }
        return ResponseEntity.status(401).build();
    }

    @GetMapping
    public ResponseEntity<List<PhysicalTrainingRequest>> getAllRequests() {
        List<PhysicalTrainingRequest> list = physicalTrainingRequestServiceImpl.getAllPhysicalTrainingRequests();
        return ResponseEntity.status(200).body(list);
    }
}
