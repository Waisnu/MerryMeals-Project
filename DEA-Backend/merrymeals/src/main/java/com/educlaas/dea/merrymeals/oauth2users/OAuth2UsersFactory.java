package com.educlaas.dea.merrymeals.oauth2users;

import java.util.Map;

import org.springframework.security.oauth2.core.OAuth2AuthenticationException;

import com.educlaas.dea.merrymeals.dao.AuthProvider;


public class OAuth2UsersFactory {
    public static OAuth2Users getInstance(String registerId, Map<String, Object> attributes) throws OAuth2AuthenticationException {
		if(registerId.equalsIgnoreCase(AuthProvider.google.toString())) {
			return new GoogleOAuth2Users(attributes);
		}
		else if(registerId.equalsIgnoreCase(AuthProvider.facebook.toString())) {
			return new FacebookOAuth2Users(attributes);
		}
		else {
			throw new OAuth2AuthenticationException("Login with" + registerId + "is not supported yet!!!");
		}
	}
}