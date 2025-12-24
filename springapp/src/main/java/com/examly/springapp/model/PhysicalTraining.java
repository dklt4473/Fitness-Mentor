package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class PhysicalTraining {
    @Id
    @GeneratedValue
    Long physicalTrainingId;
    String trainingName;
    String description;
    String trainerName;
    String location;
    Boolean isIndoor;
    Double fee;
    String focusArea;
    String physicalRequirements;
    
    public PhysicalTraining() {
    }
    public PhysicalTraining(Long physicalTrainingId, String trainingName, String description, String trainerName,
            String location, Boolean isIndoor, Double fee, String focusArea, String physicalRequirements) {
        this.physicalTrainingId = physicalTrainingId;
        this.trainingName = trainingName;
        this.description = description;
        this.trainerName = trainerName;
        this.location = location;
        this.isIndoor = isIndoor;
        this.fee = fee;
        this.focusArea = focusArea;
        this.physicalRequirements = physicalRequirements;
    }
    public Long getPhysicalTrainingId() {
        return physicalTrainingId;
    }
    public void setPhysicalTrainingId(Long physicalTrainingId) {
        this.physicalTrainingId = physicalTrainingId;
    }
    public String getTrainingName() {
        return trainingName;
    }
    public void setTrainingName(String trainingName) {
        this.trainingName = trainingName;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getTrainerName() {
        return trainerName;
    }
    public void setTrainerName(String trainerName) {
        this.trainerName = trainerName;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public Boolean getIsIndoor() {
        return isIndoor;
    }
    public void setIsIndoor(Boolean isIndoor) {
        this.isIndoor = isIndoor;
    }
    public Double getFee() {
        return fee;
    }
    public void setFee(Double fee) {
        this.fee = fee;
    }
    public String getFocusArea() {
        return focusArea;
    }
    public void setFocusArea(String focusArea) {
        this.focusArea = focusArea;
    }
    public String getPhysicalRequirements() {
        return physicalRequirements;
    }
    public void setPhysicalRequirements(String physicalRequirements) {
        this.physicalRequirements = physicalRequirements;
    }
    @Override
    public String toString() {
        return "PhysicalTraining [physicalTrainingId=" + physicalTrainingId + ", trainingName=" + trainingName
                + ", description=" + description + ", trainerName=" + trainerName + ", location=" + location
                + ", isIndoor=" + isIndoor + ", fee=" + fee + ", focusArea=" + focusArea + ", physicalRequirements="
                + physicalRequirements + "]";
    }
    
}
