package com.my_profile.notification_service;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
@OpenAPIDefinition(
		info = @Info(contact = @Contact(name = "Nguyen Huu Tin",
				email = "nguyenhuutin124@gmail.com"), title = "Notification Service",
				description = "Notification service provide the department information to notification.",
				license = @License(name = "Notification service licence", url = "www.google.com/licence"),
				version = "v1"),
		security = @SecurityRequirement(name = "bearerAuth"))
public class NotificationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(NotificationServiceApplication.class, args);
	}

}
