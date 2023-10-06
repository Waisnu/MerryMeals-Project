package com.educlaas.dea.merrymeals.service;

import com.educlaas.dea.merrymeals.pojo.WebhookMessage;

public interface WebhookService {
	public void sendMessage(String sender, WebhookMessage messages);
}