package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.PhysicalTrainingRequest;

@Repository
public interface PhysicalTrainingRequestRepo  extends JpaRepository<PhysicalTrainingRequest, Long>{
   @Query("select p from PhysicalTrainingRequest p where p.user.userId = ?1")
   List<PhysicalTrainingRequest> findByUserId(long userId);

}
