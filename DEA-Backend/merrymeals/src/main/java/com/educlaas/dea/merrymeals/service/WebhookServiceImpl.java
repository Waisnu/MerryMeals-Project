package com.educlaas.dea.merrymeals.service;

import java.util.Collections;
import java.util.Map;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.educlaas.dea.merrymeals.pojo.WebhookMessage;

@Service
public class WebhookServiceImpl implements WebhookService{
	private static final String WEBHOOK_URL = "https://hooks.slack.com/services/%s";
	private static final Map<String, String> WEBHOOK_CHANNEL = Collections.singletonMap("dea-group10-merrymeal-project-summative","T06067NNLBT/B05V7K4RP9Q/BEogi0mxqohaWgV9n5KrAkT0");

	@Override
	public void sendMessage(String sender, WebhookMessage messages) {
		//Sender from the current channel 
		String senderName = WEBHOOK_CHANNEL.get(sender);
		//Combine two strigs, Webhook URL and the sender who wants to send message to the current channel
		String slackURL = String.format(WEBHOOK_URL, senderName);
		//Declare HTTP header
		HttpHeaders htppHeaders = new HttpHeaders();
		//To save the message using JSON format in body
		htppHeaders.setContentType(MediaType.APPLICATION_JSON);
		//To bind data or message to the body
		ObjectMapper objectMapper = new ObjectMapper();
		
		try {
			//Binding message in body using JSON 
			String body = objectMapper.writeValueAsString(messages);
			//HTTP entity to send body and header
			HttpEntity<String> httpEntity = new HttpEntity<String>(body, htppHeaders);
			//Rest Template to send data to the controller using REST API
			RestTemplate restTemplate = new RestTemplate();
			restTemplate.exchange(slackURL, HttpMethod.POST, httpEntity, String.class);	
			
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
	}

	public static String getWebhookUrl() {
		return WEBHOOK_URL;
	}

	public static Map<String, String> getWebhookChannel() {
		return WEBHOOK_CHANNEL;
	}
}