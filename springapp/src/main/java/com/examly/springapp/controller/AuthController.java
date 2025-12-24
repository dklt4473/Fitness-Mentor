package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.config.JwtUtils;
import com.examly.springapp.model.LoginDTO;
import com.examly.springapp.model.LoginResponseDTO;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserServiceImpl;

@RestController
@RequestMapping
public class AuthController {

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private JwtUtils jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/api/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User newUser = userServiceImpl.createUser(user);
        if (newUser != null)
            return ResponseEntity.status(201).body(newUser);
        return ResponseEntity.status(403).build();
    }

   
    @PostMapping("/api/login")
    public LoginResponseDTO authenticateAndGetToken(@RequestBody LoginDTO user) {
        System.out.println("Entering Method");
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword()));
        if (authentication.isAuthenticated()) {
            LoginResponseDTO dto = new LoginResponseDTO();
            System.out.println("EMAIL : " + user.getEmail());
            dto.setToken(jwtService.generateToken(user.getEmail()));
            dto.setRole(userServiceImpl.loginUser(user.getEmail()).getUserRole());
            dto.setUserId(userServiceImpl.loginUser(user.getEmail()).getUserId());
            return dto;
        } else {
            throw new UsernameNotFoundException("invalid user request..!!");
        }
    }
    @GetMapping("/api/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userServiceImpl.getById(id);
        if (user != null) {
            return ResponseEntity.status(200).body(user);
        } else {
            return ResponseEntity.status(404).build();
        }
    }
}