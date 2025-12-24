package com.examly.springapp.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.examly.springapp.exception.UserAlreadyExist;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepo;

@Service
public class UserServiceImpl implements UserService {
    UserRepo userRepo;

    PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImpl(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
        this.userRepo = userRepo;
    }

    @Override
    // for creating/saving an user into our database
    public User createUser(User user) {
        User usr = userRepo.findUsingEmail(user.getEmail());
        if(usr!=null){
        throw new UserAlreadyExist(409, "User is already present");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    @Override
    public User loginUser(String email) {
        User foundUser = userRepo.findUsingEmail(email);
        if(foundUser!=null){
                return foundUser;
        }
        return null;
    }
    public User getById(long id){
        Optional<User> usr = userRepo.findById(id);
        if(usr.isPresent()){
            return usr.get();
        }
        return null;
    }

}
