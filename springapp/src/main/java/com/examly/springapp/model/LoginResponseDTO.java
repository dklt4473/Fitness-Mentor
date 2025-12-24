package com.examly.springapp.model;

public class LoginResponseDTO {

    private String role;
    private long userId;
    private String token;

    public LoginResponseDTO() {
    }

    public LoginResponseDTO(String role, String token, long userId) {
        this.role = role;
        this.token = token;
        this.userId = userId;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

}
