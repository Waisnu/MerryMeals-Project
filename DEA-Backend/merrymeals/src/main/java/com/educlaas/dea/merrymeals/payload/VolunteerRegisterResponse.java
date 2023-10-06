package com.educlaas.dea.merrymeals.payload;

public class VolunteerRegisterResponse {
    private boolean success;
	private String message;
	
	public boolean isSuccess() {
		return success;
	}
	
	public void setSuccess(boolean success) {
		this.success = success;
	}
	
	public String getMessage() {
		return message;
	}
	
	public void setMessage(String message) {
		this.message = message;
	}

	public VolunteerRegisterResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}	
}
