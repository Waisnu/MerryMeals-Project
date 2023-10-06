package com.educlaas.dea.merrymeals.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.educlaas.dea.merrymeals.dao.Users;
import com.educlaas.dea.merrymeals.exception.ResourceNotFoundException;
import com.educlaas.dea.merrymeals.repository.UsersRepository;

@Service
@Transactional
public class UsersServiceImpl implements UserDetailsService{
    @Autowired
    UsersRepository userRepository;
    
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users users = userRepository.findByEmail(email)
        .orElseThrow( () -> new UsernameNotFoundException("This email cannot be found" + email));
		
		return UsersPrincipal.createUser(users);
    }

    public UserDetails loadUserById(long userId){
		Users users = userRepository.findById(userId)
		.orElseThrow( () -> new ResourceNotFoundException("Users", "userId", userId));
		
		return UsersPrincipal.createUser(users);
	}
    
}
