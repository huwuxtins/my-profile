//package com.my_profile.content_management_serivce.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
//import org.springframework.security.config.web.server.ServerHttpSecurity;
//import org.springframework.security.oauth2.client.*;
//import org.springframework.security.oauth2.client.endpoint.WebClientReactiveClientCredentialsTokenResponseClient;
//import org.springframework.security.oauth2.client.registration.ReactiveClientRegistrationRepository;
//import org.springframework.security.oauth2.client.web.DefaultReactiveOAuth2AuthorizedClientManager;
//import org.springframework.security.oauth2.client.web.reactive.function.client.ServerOAuth2AuthorizedClientExchangeFilterFunction;
//import org.springframework.security.oauth2.client.web.server.ServerOAuth2AuthorizedClientRepository;
//import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
//import org.springframework.security.oauth2.jwt.ReactiveJwtDecoders;
//import org.springframework.security.web.server.SecurityWebFilterChain;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.web.reactive.function.client.WebClient;
//
//@Configuration
//@EnableWebFluxSecurity
//public class WebFluxSecurityConfig {
//    @Bean
//    public SecurityWebFilterChain securityWebFilterChain(ServerHttpSecurity http) {
//        return http
//                .csrf(ServerHttpSecurity.CsrfSpec::disable)
//                .authorizeExchange(authorize -> {
//                    authorize
//                            .pathMatchers("/", "/images/**", "/api/v1/content-management-swagger/**").permitAll()
//                             .anyExchange().authenticated();
//                })
//                .oauth2ResourceServer((oauth2) -> oauth2
//                        .jwt(Customizer.withDefaults())
//                )
//                .build();
//    }
//
//    @Bean
//    public ReactiveJwtDecoder jwtDecoder() {
//        return ReactiveJwtDecoders.fromIssuerLocation("https://dev-k6vjpfkbkgmdsry6.us.auth0.com/");
//    }
//
////    @Bean
////    public ClientRegistrationRepository clientRegistrationRepository() {
////        ClientRegistration auth0Registration = ClientRegistration.withRegistrationId("auth0")
////                .clientId(clientID)
////                .clientSecret(clientSecret)
////                .scope(scope)
////                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
////                .issuerUri(issuerUri)
////                .build();
////
////        return new InMemoryClientRegistrationRepository(auth0Registration);
////    }
//
//    @Bean
//    public ReactiveOAuth2AuthorizedClientManager authorizedClientManager(
//            ReactiveClientRegistrationRepository clientRegistrationRepository,
//            ServerOAuth2AuthorizedClientRepository authorizedClientRepository) {
//
//        WebClientReactiveClientCredentialsTokenResponseClient responseClient =
//                new WebClientReactiveClientCredentialsTokenResponseClient();
//
//        // Spring does not provide a configuration only way to add 'resource' to the message body
//        // See https://docs.spring.io/spring-security/reference/servlet/oauth2/client/authorization-grants.html#_customizing_the_access_token_request_2
//        responseClient.addParametersConverter(
//                source -> {
//                    LinkedMultiValueMap<String, String> map = new LinkedMultiValueMap<>();
//                    map.add("audience", "https://dev-k6vjpfkbkgmdsry6.us.auth0.com/api/v2/");
//                    return map;
//                }
//        );
//
//        ReactiveOAuth2AuthorizedClientProvider authorizedClientProvider =
//                ReactiveOAuth2AuthorizedClientProviderBuilder.builder()
//                        .clientCredentials(clientCredentialsGrantBuilder ->
//                                clientCredentialsGrantBuilder.accessTokenResponseClient(responseClient))
//                        .build();
//
//        DefaultReactiveOAuth2AuthorizedClientManager authorizedClientManager =
//                new DefaultReactiveOAuth2AuthorizedClientManager(
//                        clientRegistrationRepository, authorizedClientRepository);
//        authorizedClientManager.setAuthorizedClientProvider(authorizedClientProvider);
//
//        return authorizedClientManager;
//    }
//
//    @Bean
//    public WebClient webClient(ReactiveOAuth2AuthorizedClientManager authorizedClientManager) {
//        ServerOAuth2AuthorizedClientExchangeFilterFunction oauth2Client =
//                new ServerOAuth2AuthorizedClientExchangeFilterFunction(authorizedClientManager);
//        oauth2Client.setDefaultClientRegistrationId("auth0");
//        return WebClient.builder()
//                .filter(oauth2Client)
//                .build();
//    }
//}