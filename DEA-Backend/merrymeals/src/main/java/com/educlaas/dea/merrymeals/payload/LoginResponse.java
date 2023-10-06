package com.educlaas.dea.merrymeals.payload;

//After login successful, it produces token <<tokenType and accessToken>>
public class LoginResponse {
	private String accessToken;
	private String tokenType = "Bearer";
	
	public String getAccessToken() {
		return accessToken;
	}
	
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	
	public String getTokenType() {
		return tokenType;
	}
	
	public void setTokenType(String tokenType) {
		this.tokenType = tokenType;
	}

	public LoginResponse(String accessToken) {
		this.accessToken = accessToken;
	}
}
