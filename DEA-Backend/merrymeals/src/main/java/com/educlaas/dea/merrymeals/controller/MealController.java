package com.educlaas.dea.merrymeals.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.MealItem;
import com.educlaas.dea.merrymeals.repository.MealRepository;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/meal")
public class MealController {
    @Autowired
    private MealRepository mealRepository;

    @PostMapping("/savemeal")
    private MealItem saveMealItem(@RequestBody MealItem mealItem){
        return mealRepository.save(mealItem);
    }

    @GetMapping("/all")
    public List<MealItem> getMeals(){
        return mealRepository.findAll();
    }

    @PutMapping("/{mealId}")
    public MealItem updMealItem(@PathVariable long mealId, @RequestBody MealItem mealItem) {
        Optional<MealItem> existingMeal = mealRepository.findById(mealId);
        if(!existingMeal.isEmpty()){
            MealItem updatedMeal = existingMeal.get();

            updatedMeal.setName(mealItem.getName());
            updatedMeal.setDescription(mealItem.getDescription());
            updatedMeal.setDay(mealItem.getDay());

            return mealRepository.save(updatedMeal);
        }
        return null;
    }

    @DeleteMapping("/{mealId}")
    public void deleteMealItem(@PathVariable long mealId){
        mealRepository.deleteById(mealId);
    }
}
