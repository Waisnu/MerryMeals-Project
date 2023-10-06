package com.educlaas.dea.merrymeals.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.educlaas.dea.merrymeals.dao.Users;


@Repository
public interface UsersRepository extends JpaRepository<Users, Long>{
    
    Optional<Users> findByEmail(String email);
    Boolean existsByEmail(String email);
}
