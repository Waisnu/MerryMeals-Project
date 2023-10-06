package com.educlaas.dea.merrymeals.dao;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.util.Objects;

@Entity
@Table(name ="meal_order")
public class MealOrder {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mealOrderId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "member_id", referencedColumnName = "memberId")
    private Member member;

    private String mondayMeal;
    private String tuesdayMeal;
    private String wednesdayMeal;
    private String thursdayMeal;
    private String fridayMeal;


    public long getMealOrderId() {
        return this.mealOrderId;
    }

    public void setMealOrderId(long mealOrderId) {
        this.mealOrderId = mealOrderId;
    }

    public Member getMember() {
        return this.member;
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public String getMondayMeal() {
        return this.mondayMeal;
    }

    public void setMondayMeal(String mondayMeal) {
        this.mondayMeal = mondayMeal;
    }

    public String getTuesdayMeal() {
        return this.tuesdayMeal;
    }

    public void setTuesdayMeal(String tuesdayMeal) {
        this.tuesdayMeal = tuesdayMeal;
    }

    public String getWednesdayMeal() {
        return this.wednesdayMeal;
    }

    public void setWednesdayMeal(String wednesdayMeal) {
        this.wednesdayMeal = wednesdayMeal;
    }

    public String getThursdayMeal() {
        return this.thursdayMeal;
    }

    public void setThursdayMeal(String thursdayMeal) {
        this.thursdayMeal = thursdayMeal;
    }

    public String getFridayMeal() {
        return this.fridayMeal;
    }

    public void setFridayMeal(String fridayMeal) {
        this.fridayMeal = fridayMeal;
    }
    
}
