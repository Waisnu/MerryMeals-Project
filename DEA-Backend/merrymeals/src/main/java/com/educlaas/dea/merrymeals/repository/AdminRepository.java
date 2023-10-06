package com.educlaas.dea.merrymeals.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.Admin;
import com.educlaas.dea.merrymeals.dao.Users;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Long>{
    Admin findByUser(Users user);
}
