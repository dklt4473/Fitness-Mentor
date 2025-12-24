package com.examly.springapp.exception;

public class DuplicateTrainingException extends RuntimeException{
    int status;
    public DuplicateTrainingException(int status,String message){
        super(message);
        this.status=status;
    }
    public int getStatus() {
        return status;
    }
}
