package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.DuplicateTrainingException;
import com.examly.springapp.exception.TrainingDeletionException;
import com.examly.springapp.model.PhysicalTraining;
import com.examly.springapp.repository.PhysicalTrainingRepo;

@Service
public class PhysicalTrainingServiceImpl implements PhysicalTrainingService {
    PhysicalTrainingRepo physicalTrainingRepo;

    @Autowired
    public PhysicalTrainingServiceImpl(PhysicalTrainingRepo physicalTrainingRepo) {
        this.physicalTrainingRepo = physicalTrainingRepo;
    }

    @Override
    public PhysicalTraining addPhysicalTraining(PhysicalTraining training) {
        List<PhysicalTraining> list = physicalTrainingRepo.findByTrainingName(training.getTrainingName());
        if (list.size() > 0) {
            throw new DuplicateTrainingException(401, "Training with name already exists");
        }
        return physicalTrainingRepo.save(training);
    }

    @Override
    public Boolean deletePhysicalTraining(Long trainingId) {
        Optional<PhysicalTraining> optPhysicalTraining = physicalTrainingRepo.findById(trainingId);
        if (optPhysicalTraining.isPresent()) {
            physicalTrainingRepo.delete(optPhysicalTraining.get());
            return true;
        }
       throw new TrainingDeletionException(401,"Training with this ID does not exist");
    }

    @Override
    public List<PhysicalTraining> getAllPhysicalTrainings() {
        return physicalTrainingRepo.findAll();
    }

    @Override
    public Optional<PhysicalTraining> getPhysicalTrainingById(Long trainingId) {
        return physicalTrainingRepo.findById(trainingId);
    }

    @Override
    public PhysicalTraining updatePhysicalTraining(Long trainingId, PhysicalTraining updatedTraining) {
        Optional<PhysicalTraining> optPhysicalTraining = physicalTrainingRepo.findById(trainingId);
        if (optPhysicalTraining.isPresent()) {
            return physicalTrainingRepo.save(updatedTraining);
        }
        return null;
    }

}
