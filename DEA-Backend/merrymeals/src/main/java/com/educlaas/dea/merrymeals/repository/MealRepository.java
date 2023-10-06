package com.educlaas.dea.merrymeals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.MealItem;

@Repository
public interface MealRepository extends JpaRepository<MealItem, Long> {
    
}
