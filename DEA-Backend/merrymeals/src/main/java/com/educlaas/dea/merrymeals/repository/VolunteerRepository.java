package com.educlaas.dea.merrymeals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.dao.Users;


@Repository
public interface VolunteerRepository extends JpaRepository<Volunteer, Long>{
    Volunteer findByUser(Users user);
}
