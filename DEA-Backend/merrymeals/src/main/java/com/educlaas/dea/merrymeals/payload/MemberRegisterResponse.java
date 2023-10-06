package com.educlaas.dea.merrymeals.payload;

//After register, it will show in body as JSON format <<success, message>>
public class MemberRegisterResponse {
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

	public MemberRegisterResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}	
	
}
