package com.educlaas.dea.merrymeals;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

import com.educlaas.dea.merrymeals.configuration.AppProperties;
import com.educlaas.dea.merrymeals.controller.PaymentAPIServer;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class MerrymealsApplication {

	public static void main(String[] args) {
		SpringApplication.run(MerrymealsApplication.class, args);
		PaymentAPIServer.startPaymentAPIServer(); // Start the payment API server
	}
	
	

}
