package com.educlaas.dea.merrymeals.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.educlaas.dea.merrymeals.dao.AuthProvider;
import com.educlaas.dea.merrymeals.dao.Member;
import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.dao.Volunteer;
import com.educlaas.dea.merrymeals.exception.BadRequestException;
import com.educlaas.dea.merrymeals.jwtsecurity.TokenProvider;
import com.educlaas.dea.merrymeals.payload.Login;
import com.educlaas.dea.merrymeals.payload.LoginResponse;
import com.educlaas.dea.merrymeals.payload.MemberRegister;
import com.educlaas.dea.merrymeals.payload.MemberRegisterResponse;
import com.educlaas.dea.merrymeals.payload.VolunteerDto;
import com.educlaas.dea.merrymeals.payload.VolunteerRegisterResponse;
import com.educlaas.dea.merrymeals.repository.MemberRepository;
import com.educlaas.dea.merrymeals.repository.UsersRepository;
import com.educlaas.dea.merrymeals.repository.VolunteerRepository;

@RestController
@RequestMapping("/online")
public class AuthController {
	@Autowired
	private UsersRepository usersRepository;

	@Autowired
	private VolunteerRepository volunteerRepository;

	@Autowired
	private MemberRepository memberRepository;

	@Autowired
	private TokenProvider tokenProvider;

	@Autowired
	private PasswordEncoder passwordEncoder;;

	@Autowired
	private AuthenticationManager authenticationManager;

	// Register User for Local
	@PostMapping(value = "/register/member")
	public ResponseEntity<?> registerMember(@RequestBody MemberRegister register) {
		// Checking duplicate email
		if (usersRepository.existsByEmail(register.getEmail())) {
			throw new BadRequestException(
					"This email is already registered. Please use a different email or log in if this is your account.");
		}

		Users users = new Users();
		users.setEmail(register.getEmail());
		users.setPassword(register.getPassword());
		users.setProvider(AuthProvider.local);
		users.setRole("ROLE_MEMBER");
		// Encode Password
		users.setPassword(passwordEncoder.encode(users.getPassword()));

		// Save new user in the database
		Users newUser = usersRepository.save(users);

		Member member = new Member();
		System.out.println("REGISTERATION: " + register.toString());
		member.setFirstName(register.getFirstName());
		member.setLastName(register.getLastName());
		member.setLongitude(register.getLongitude());
		member.setLatitude(register.getLatitude());
		member.setContactNumber(register.getContactNumber());
		member.setDob(register.getDob());
		member.setCondition(register.getCondition());
		member.setAllergies(register.getAllergies());
		member.setCaregiverName(register.getCaregiverName());
		member.setRelationship(register.getRelationship());
		member.setCaregiverContact(register.getCaregiverContact());
		member.setUser(newUser);

		Member newMember = memberRepository.save(member);

		URI location = ServletUriComponentsBuilder
				.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(newMember.getUser().getUserId()).toUri();

		// Return to RegisterResponse Payload
		return ResponseEntity.created(location)
				.body(new MemberRegisterResponse(true, "User has successfully registered!!!"));

	}

	@PostMapping(value = "/register/volunteer")
	public ResponseEntity<?> registerVolunteer(@RequestBody VolunteerDto register) {
		// Checking duplicate email
		if (usersRepository.existsByEmail(register.getEmail())) {
			throw new BadRequestException(
					"This email is already registered. Please use a different email or log in if this is your account.");
		}

		Users users = new Users();
		users.setEmail(register.getEmail());
		users.setPassword(register.getPassword());
		users.setProvider(AuthProvider.local);
		users.setRole("ROLE_VOLUNTEER");
		// Encode Password
		users.setPassword(passwordEncoder.encode(users.getPassword()));

		// Save new user in the database
		Users newUser = usersRepository.save(users);

		Volunteer volunteer = new Volunteer();
		volunteer.setFirstName(register.getFirstName());
		volunteer.setLastName(register.getLastName());
		volunteer.setLongitude(register.getLongitude());
		volunteer.setLatitude(register.getLatitude());
		volunteer.setContactNumber(register.getContactNumber());
		volunteer.setDob(register.getDob());
		volunteer.setRepresentingGroup(register.getRepresentingGroup());
		volunteer.setGroupName(register.getGroupName());
		volunteer.setStation(register.getStation());
		volunteer.setUser(newUser);

		Volunteer newVolunteer = volunteerRepository.save(volunteer);

		URI location = ServletUriComponentsBuilder
				.fromCurrentContextPath().path("/user/me")
				.buildAndExpand(newVolunteer.getUser().getUserId()).toUri();

		// Return to RegisterResponse Payload
		return ResponseEntity.created(location)
				.body(new VolunteerRegisterResponse(true, "User has successfully registered!!!"));

	}

	// Local Login
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody Login login) {

		// Checking Authentication
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						login.getEmail(),
						login.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);

		// If authorized user, create token
		String token = tokenProvider.createToken(authentication);

		// Return to LoginResponse Payload
		return ResponseEntity.ok(new LoginResponse(token));
	}

}
