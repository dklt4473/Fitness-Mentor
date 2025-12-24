package com.examly.springapp.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(PhysicalTrainingException.class)
    public ResponseEntity<String> handlePhysicalTrainingException(PhysicalTrainingException pe){
        return ResponseEntity.status(pe.getStatus()).body(pe.getMessage());
    }

    @ExceptionHandler(DuplicateTrainingException.class)
    public ResponseEntity<String> handleDuplicateTrainingException(DuplicateTrainingException de){
        return ResponseEntity.status(de.getStatus()).body(de.getMessage());
    }

    @ExceptionHandler(TrainingDeletionException.class)
    public ResponseEntity<String> handleTrainingDeletionException(TrainingDeletionException te){
        return ResponseEntity.status(te.getStatus()).body(te.getMessage());
    }

    @ExceptionHandler(UserAlreadyExist.class)
    public ResponseEntity<String> handleUserExistsException(UserAlreadyExist ue){
        return ResponseEntity.status(ue.getStatus()).body(ue.getMessage());
    }

    

}
