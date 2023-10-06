package com.educlaas.dea.merrymeals.controller;

import java.security.Provider.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Admin;
import com.educlaas.dea.merrymeals.dao.AuthProvider;
import com.educlaas.dea.merrymeals.dao.ServiceCenter;
import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.payload.AdminRegister;
import com.educlaas.dea.merrymeals.repository.AdminRepository;
import com.educlaas.dea.merrymeals.repository.ServiceCenterRepository;
import com.educlaas.dea.merrymeals.repository.UsersRepository;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UsersRepository usersRepository;

    @Autowired
	private PasswordEncoder passwordEncoder;

    @Autowired
    private ServiceCenterRepository serviceCenterRepository;

    @PostMapping("/register")
    private Admin registerAdmin(@RequestBody AdminRegister register){
        Users user = new Users();

        user.setEmail(register.getEmail());
        user.setPassword(register.getPassword());
        user.setProvider(AuthProvider.local);
		user.setRole("ROLE_ADMIN");
		user.setPassword(passwordEncoder.encode(user.getPassword()));

        Users newUser = usersRepository.save(user);
        Admin admin = new Admin();

        admin.setFirstName(register.getFirstName());
        admin.setLastName(register.getLastName());
        admin.setUser(newUser);


        return adminRepository.save(admin);
    }
}
