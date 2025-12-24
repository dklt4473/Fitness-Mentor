package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.PhysicalTraining;
import com.examly.springapp.service.PhysicalTrainingServiceImpl;

@RestController
@RequestMapping("/api/physicalTraining")
public class PhysicalTrainingController {
    PhysicalTrainingServiceImpl physicalTrainingServiceImpl;

    @Autowired
    public PhysicalTrainingController(PhysicalTrainingServiceImpl physicalTrainingServiceImpl) {
        this.physicalTrainingServiceImpl = physicalTrainingServiceImpl;
    }

    @PostMapping
    public ResponseEntity<PhysicalTraining> addPhysicalTraining(@RequestBody PhysicalTraining training){
        System.out.println("Reached Controller");
        PhysicalTraining newPhysicalTraining= physicalTrainingServiceImpl.addPhysicalTraining(training);
        if(newPhysicalTraining == null) {
            System.out.println("HERE");
            return ResponseEntity.status(401).build();
        }
        return ResponseEntity.status(201).body(newPhysicalTraining);
    }
    
    @GetMapping("/{trainingId}")
    public ResponseEntity<Optional<PhysicalTraining>> getPhysicalTrainingById(@PathVariable long trainingId){
        Optional<PhysicalTraining> newPhysicalTraining=physicalTrainingServiceImpl.getPhysicalTrainingById(trainingId);
        if(newPhysicalTraining == null)
            return ResponseEntity.status(404).build();
        return ResponseEntity.status(200).body(newPhysicalTraining);
    }

    @GetMapping
    public ResponseEntity<List<PhysicalTraining>> getAllPhysicalTrainings(){
        List<PhysicalTraining> newPhysicalTraining = physicalTrainingServiceImpl.getAllPhysicalTrainings();
        return ResponseEntity.status(200).body(newPhysicalTraining);
    }
    
    @PutMapping("/{trainingId}")
    public ResponseEntity<PhysicalTraining> updatePhysicalTraining(@PathVariable long trainingId,@RequestBody PhysicalTraining updatedTraining){
        PhysicalTraining newPhysicalTraining=physicalTrainingServiceImpl.updatePhysicalTraining(trainingId, updatedTraining);
        if(newPhysicalTraining == null)
            return ResponseEntity.status(404).build();
        return ResponseEntity.status(200).body(newPhysicalTraining);
    }

    @DeleteMapping("/{trainingId}")
    public ResponseEntity<Void> deletePhysicalTraining(@PathVariable long trainingId){
        boolean newPhysicalTraining=physicalTrainingServiceImpl.deletePhysicalTraining(trainingId);
        if(newPhysicalTraining) {
            return ResponseEntity.status(200).build();
        }   
        return ResponseEntity.status(404).build();
    }

}
