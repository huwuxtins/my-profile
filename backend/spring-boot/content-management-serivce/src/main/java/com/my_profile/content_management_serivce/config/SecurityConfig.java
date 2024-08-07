package com.my_profile.content_management_serivce.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.security.web.server.authentication.logout.RedirectServerLogoutSuccessHandler;
import org.springframework.security.web.server.authentication.logout.ServerLogoutSuccessHandler;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Value("${spring.security.oauth2.client.provider.auth0.issuer-uri}")
    private String issuer;
    @Value("${spring.security.oauth2.client.registration.auth0.client-id}")
    private String clientId;

    @Bean
    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
        return http
                .csrf(ServerHttpSecurity.CsrfSpec::disable)
                .authorizeExchange(authorize -> {
                    authorize.pathMatchers("/", "/images/**", "/api/v1/content-management-swagger/**").permitAll()
                             .anyExchange().authenticated();
                })
                .oauth2Login(withDefaults())
                .logout(logout -> logout.logoutSuccessHandler(logoutSuccessHandler())).build();
    }

    /**
     * Configures the logout handling to log users out of Auth0 after successful
     * logout from the application.
     *
     * @return a {@linkplain ServerLogoutSuccessHandler} that will be called on
     *         successful logout.
     */
    @Bean
    public ServerLogoutSuccessHandler logoutSuccessHandler() {
        // Change this as needed to URI where users should be redirected to after logout
        String returnTo = "http://localhost:8081/";

        // Build the URL to log the user out of Auth0 and redirect them to the home
        // page.
        // URL will look like
        // https://YOUR-DOMAIN/v2/logout?clientId=YOUR-CLIENT-ID&returnTo=http://localhost:3000
        String logoutUrl = UriComponentsBuilder
                .fromHttpUrl(issuer + "v2/logout?client_id=" + clientId + "&returnTo=" + returnTo)
                .encode()
                .buildAndExpand(clientId, returnTo)
                .toUriString();

        RedirectServerLogoutSuccessHandler handler = new RedirectServerLogoutSuccessHandler();
        handler.setLogoutSuccessUrl(URI.create(logoutUrl));
        return handler;
    }
}