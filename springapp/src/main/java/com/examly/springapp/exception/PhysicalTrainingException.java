package com.examly.springapp.exception;

public class PhysicalTrainingException extends RuntimeException{
    int status;
    public PhysicalTrainingException(int status,String message){
        super(message);
        this.status=status;
    }
    public int getStatus() {
        return status;
    }
}
