package com.example.authapi.controller;


import com.example.authapi.entity.ApiData;
import com.example.authapi.repository.ApiDataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data")
@CrossOrigin(origins = "*") // Allows your Frontend (like Vite/React) to safely access this middleware
public class ApiDataController {

    @Autowired
    private ApiDataRepository apiDataRepository;

    // 1. GET Endpoint: Fetches all data from MySQL and returns it to Frontend
    @GetMapping
    public List<ApiData> getAllData() {
        return apiDataRepository.findAll();
    }

    // 2. POST Endpoint: Receives new data from Frontend and saves it to MySQL
    @PostMapping
    public ApiData createData(@RequestBody ApiData newData) {
        return apiDataRepository.save(newData);
    }
}
