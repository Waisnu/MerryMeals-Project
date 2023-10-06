package com.educlaas.dea.merrymeals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.MealOrder;
import com.educlaas.dea.merrymeals.dao.Member;

import java.util.List;
import java.util.Optional;


@Repository
public interface MealOrderRepository extends JpaRepository<MealOrder, Long>{
    Optional<MealOrder> findByMember(Member member);
}
