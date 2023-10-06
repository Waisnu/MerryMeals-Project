package com.educlaas.dea.merrymeals.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.educlaas.dea.merrymeals.pojo.WebhookMessage;
import com.educlaas.dea.merrymeals.service.WebhookService;

@RestController
@RequestMapping(value = "/webhook")
@CrossOrigin("http://localhost:3000")
public class WebhookController {
	
	@Autowired
	private WebhookService webhookService;
	
	@PostMapping(value = "/message/{sender}")
	public void sendMessage(@PathVariable String sender, @RequestBody WebhookMessage message) {
		webhookService.sendMessage(sender, message);
	}
}