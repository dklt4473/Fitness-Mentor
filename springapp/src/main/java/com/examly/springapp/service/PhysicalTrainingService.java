package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.PhysicalTraining;

public interface PhysicalTrainingService {
    
    public PhysicalTraining addPhysicalTraining(PhysicalTraining training);
    public Optional<PhysicalTraining> getPhysicalTrainingById(Long trainingId);
    public List<PhysicalTraining> getAllPhysicalTrainings();
    public PhysicalTraining updatePhysicalTraining(Long trainingId,PhysicalTraining updatedTraining);
    public Boolean deletePhysicalTraining(Long trainingId);

}
