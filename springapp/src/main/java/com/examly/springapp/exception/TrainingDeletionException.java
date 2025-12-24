package com.examly.springapp.exception;

public class TrainingDeletionException extends RuntimeException{
    int status;
    public TrainingDeletionException(int status,String message){
        super(message);
        this.status=status;
    }
    public int getStatus() {
        return status;
    }
}
