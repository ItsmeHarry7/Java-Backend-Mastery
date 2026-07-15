package com.example.authapi.repository;



import com.example.authapi.entity.ApiData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
// This interface gives you built-in methods like .findAll(), .save(), .findById() automatically
public interface ApiDataRepository extends JpaRepository<ApiData, Long> {
}