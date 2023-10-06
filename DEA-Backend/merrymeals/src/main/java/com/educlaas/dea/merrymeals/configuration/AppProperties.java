package com.educlaas.dea.merrymeals.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties(prefix = "mow")
public class AppProperties {
    private final Auth auth = new Auth();//Local Login Authentication
    private final OAuth2 oauth2 = new OAuth2();//OAuth Login

	public Auth getAuth() {
		return auth;
	}

	public OAuth2 getOauth2() {
		return oauth2;
	}
}
