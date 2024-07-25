package com.my_profile.content_management_serivce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@OpenAPIDefinition(
		info = @Info(contact = @Contact(name = "Nguyen Huu Tin",
				email = "nguyenhuutin124@gmail.com"), title = "Content management Service",
				description = "Content management service provide the department information to the other users.",
				license = @License(name = "Content management service licence", url = "www.google.com/licence"),
				version = "v1"),
		security = @SecurityRequirement(name = "bearerAuth"))
@EnableFeignClients
public class ContentManagementSerivceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ContentManagementSerivceApplication.class, args);
	}

}
