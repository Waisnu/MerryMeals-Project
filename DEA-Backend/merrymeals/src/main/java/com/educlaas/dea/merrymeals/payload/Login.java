package com.educlaas.dea.merrymeals.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

//Local and Google or Facebook Login
public class Login {
	@Email
	@NotBlank
	private String email;
	
	@NotBlank
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
