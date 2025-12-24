package com.examly.springapp.exception;

public class UserAlreadyExist extends RuntimeException{
    int status;
    public UserAlreadyExist(int status,String message){
        super(message);
        this.status=status;
    }
    public int getStatus() {
        return status;
    }
}
