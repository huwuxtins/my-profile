//package com.my_profile.content_management_serivce.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.core.context.ReactiveSecurityContextHolder;
//import org.springframework.security.core.context.SecurityContext;
//import reactivefeign.client.ReactiveHttpRequest;
//import reactivefeign.client.ReactiveHttpRequestInterceptor;
//import reactor.core.publisher.Mono;
//
//import java.util.Collections;
//
//@Configuration
//public class ReactiveFeignClientConfiguration implements ReactiveHttpRequestInterceptor {
//    private static final String AUTHORIZATION_HEADER = "Authorization";
//    private static final String BEARER = "Bearer";
//
//    @Override
//    public Mono<ReactiveHttpRequest> apply(ReactiveHttpRequest reactiveHttpRequest) {
//        return ReactiveSecurityContextHolder.getContext()
//                .map(SecurityContext::getAuthentication)
//                .flatMap(s -> {
//                    reactiveHttpRequest.headers().put(AUTHORIZATION_HEADER, Collections.singletonList(String.format("%s %s", BEARER, s)));
//                    return Mono.just(reactiveHttpRequest);
//                });
//    }
//}
