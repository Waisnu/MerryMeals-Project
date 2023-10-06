package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "meal_item")
public class MealItem {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mealItemId;
    
    private String name;
    private String description; 
    private String day;


    public long getMealItemId() {
        return this.mealItemId;
    }

    public void setMealItemId(long mealItemId) {
        this.mealItemId = mealItemId;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDay() {
        return this.day;
    }

    public void setDay(String day) {
        this.day = day;
    }

}
