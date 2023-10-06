package com.educlaas.dea.merrymeals.service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import com.educlaas.dea.merrymeals.dao.Users;

public class UsersPrincipal implements UserDetails, OAuth2User{
    private static final long serialVersionUID = 1L;

    private long userId;
    private String email;
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private Map<String, Object> attributes;

    public UsersPrincipal(long userId, String email, String password, Collection<?extends GrantedAuthority> authorities){
        super();
        this.userId = userId;
		this.email = email;
		this.password = password;
		this.authorities = authorities;
    }

    public static UsersPrincipal createUser(Users users) {
		List<GrantedAuthority> authorities = Collections.singletonList(new SimpleGrantedAuthority(users.getRole()));
		UsersPrincipal usersPrincipal = new UsersPrincipal(users.getUserId(), users.getEmail(), users.getPassword(), authorities);
		return usersPrincipal;
	}

    public static long getSerialversionuid() {
		return serialVersionUID;
	}

	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}

	public long getUserId() {
		return userId;
	}

	public void setUserId(long userId) {
		this.userId = userId;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
		this.authorities = authorities;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return email;
	}

	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public Map<String, Object> getAttributes() {
		return attributes;
	}

	@Override
	public String getName() {
		return String.valueOf(userId);
	}
}
