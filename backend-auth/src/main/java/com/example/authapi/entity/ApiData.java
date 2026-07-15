package com.example.authapi.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "api_data") // This names your table inside MySQL
public class ApiData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-incrementing primary key
    private Long id;

    private String title;
    private String description;

    // Default Constructor (Required by JPA)
    public ApiData() {}

    // Constructor with fields
    public ApiData(String title, String description) {
        this.title = title;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }
}