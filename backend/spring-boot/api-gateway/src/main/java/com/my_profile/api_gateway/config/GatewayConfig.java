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
        .route("user-swagger", r -> r.path("/api/v1/user-swagger/**").uri("lb://user-service"))
        .route("content-management-swagger", r -> r.path("/api/v1/content-management-swagger/**").uri("lb://content-management-service"))
        .route("search-swagger", r -> r.path("/api/v1/search-swagger/**").uri("lb://search-service"))
        .route("chat-swagger", r -> r.path("/api/v1/chat-swagger/**").uri("lb://chat-service"))
        .route("interaction-swagger", r -> r.path("/api/v1/interaction-swagger/**").uri("lb://interaction-service"))
        
        .route("user-service", r -> r.path("/api/v1/user-service/**").uri("lb://user-service"))
        .route("content-management-service", r -> r.path("/api/v1/content-management-service/**").uri("lb://content-management-service"))
        .route("search-service", r -> r.path("/api/v1/search-service/**").uri("lb://search-service"))
        .route("chat-service", r -> r.path("/api/v1/chat-service/**").uri("lb://chat-service"))
        .route("interaction-service", r -> r.path("/api/v1/interaction-service/**").uri("lb://interaction-service"))

        .build();
    }
}
