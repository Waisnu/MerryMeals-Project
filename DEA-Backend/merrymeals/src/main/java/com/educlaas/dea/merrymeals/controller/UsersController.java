package com.educlaas.dea.merrymeals.controller;

import org.hibernate.engine.jdbc.connections.internal.UserSuppliedConnectionProviderImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.dao.Admin;
import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.exception.ResourceNotFoundException;
import com.educlaas.dea.merrymeals.payload.UserAdminDto;
import com.educlaas.dea.merrymeals.payload.UserMemberDto;
import com.educlaas.dea.merrymeals.payload.UserVolunteerDto;
import com.educlaas.dea.merrymeals.repository.AdminRepository;
import com.educlaas.dea.merrymeals.repository.MemberRepository;
import com.educlaas.dea.merrymeals.repository.UsersRepository;
import com.educlaas.dea.merrymeals.repository.VolunteerRepository;
import com.educlaas.dea.merrymeals.service.UsersPrincipal;

@RestController
@RequestMapping("/online")
@CrossOrigin("http://localhost:3000")
public class UsersController {
    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private VolunteerRepository volunteerRepository;

    @Autowired
    private AdminRepository adminRepository;

    // Profile API <<Get Current User Profile>>
    @GetMapping("/user/me")
    public Object getUser(@CurrentUser UsersPrincipal usersPrincipal) {
    	Users user =  userRepository.findById((usersPrincipal.getUserId())) 
                .orElseThrow(() -> new ResourceNotFoundException("Users", "userId", usersPrincipal.getUserId()));
        String role = user.getRole();
        switch (role){
            case "ROLE_MEMBER":
                Member member = memberRepository.findByUser(user);
                return new UserMemberDto(user, member);
            case "ROLE_VOLUNTEER":
                Volunteer volunteer = volunteerRepository.findByUser(user);
                return new UserVolunteerDto(user, volunteer);
            case  "ROLE_ADMIN":
                Admin admin = adminRepository.findByUser(user);
                return new UserAdminDto(user, admin);
            default:
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("USER NOT FOUND");
        }
    }    
}
