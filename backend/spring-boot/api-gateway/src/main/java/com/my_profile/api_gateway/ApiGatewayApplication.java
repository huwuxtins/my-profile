package com.my_profile.api_gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;

@SpringBootApplication
@EnableDiscoveryClient
@OpenAPIDefinition(
		info = @Info(contact = @Contact(name = "Nguyen Huu Tin",
				email = "nguyenhuutin124@gmail.com"),
				title = "API Gateway",
				termsOfService = "",
				description = "API-Gateway provide the api-gateway information to the other users.",
				license = @License(name = "api gateway licence"),
				version = "v1"))
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
	}
}
