package com.educlaas.dea.merrymeals.payload;

public class MealOrderResponse {
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

	public MealOrderResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}	
}
