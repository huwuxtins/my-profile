package com.my_profile.api_gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {
    
    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder){
        return builder.routes()
//                Swagger
        .route("user-swagger", r -> r.path("/api/v1/user-swagger/**").uri("lb://user-service"))
        .route("content-management-swagger", r -> r.path("/api/v1/content-management-swagger/**").uri("lb://content-management-service"))
        .route("chat-swagger", r -> r.path("/api/v1/chat-swagger/**").uri("lb://chat-service"))
        .route("interaction-swagger", r -> r.path("/api/v1/interaction-swagger/**").uri("lb://interaction-service"))
        .route("notification-swagger", r -> r.path("/api/v1/notification-swagger/**").uri("lb://notification-service"))

//                Api
        .route("user-service", r -> r.path("/api/v1/user-service/**").uri("lb://user-service"))
        .route("auth-service", r -> r.path("/oauth2/authorization/auth0/**").uri("lb://user-service"))
        .route("login-service", r -> r.path("/login/oauth2/code/auth0/**").uri("lb://user-service"))
        .route("content-management-service", r -> r.path("/api/v1/blog/**").uri("lb://content-management-service"))
        .route("content-management-service", r -> r.path("/api/v1/diary/**").uri("lb://content-management-service"))
        .route("content-management-service", r -> r.path("/api/v1/plan/**").uri("lb://content-management-service"))
        .route("chat-service", r -> r.path("/api/v1/chat-service/**").uri("lb://chat-service"))
        .route("interaction-service", r -> r.path("/api/v1/interaction-service/**").uri("lb://interaction-service"))
        .route("notification-service", r -> r.path("/api/v1/notification-service/**").uri("lb://notification-service"))

        .build();
    }
}
