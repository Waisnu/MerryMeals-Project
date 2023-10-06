package com.educlaas.dea.merrymeals.oauth2users;

import java.util.Map;

public abstract class OAuth2Users {
    protected Map<String, Object> attributes;

	//Constructor
	public OAuth2Users(Map<String, Object> attributes) {
		super();
		this.attributes = attributes;
	}
	
	public Map<String, Object> getAttributes() {
		return attributes;
	}

	public void setAttributes(Map<String, Object> attributes) {
		this.attributes = attributes;
	}

	public abstract String getId();
	public abstract String getName();
	public abstract String getEmail();
	public abstract String getImageUrl();
	public abstract String getFirstName();
	public abstract String getLastName();
}
