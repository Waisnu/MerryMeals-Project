package com.educlaas.dea.merrymeals.payload;

public class MealOrderDto {
    private long currentMember;
    private String mondayMeal;
    private String tuesdayMeal;
    private String wednesdayMeal;
    private String thursdayMeal;
    private String fridayMeal;

    public MealOrderDto() {
    }

    public MealOrderDto(long currentMember, String mondayMeal, String tuesdayMeal, String wednesdayMeal, String thursdayMeal, String fridayMeal) {
        this.currentMember = currentMember;
        this.mondayMeal = mondayMeal;
        this.tuesdayMeal = tuesdayMeal;
        this.wednesdayMeal = wednesdayMeal;
        this.thursdayMeal = thursdayMeal;
        this.fridayMeal = fridayMeal;
    }

    public long getCurrentMember() {
        return this.currentMember;
    }

    public void setCurrentMember(long currentMember) {
        this.currentMember = currentMember;
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
