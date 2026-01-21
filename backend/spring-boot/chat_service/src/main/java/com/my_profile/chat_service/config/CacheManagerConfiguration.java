//package com.my_profile.chat_service.config;
//
//import org.springframework.boot.autoconfigure.cache.CacheManagerCustomizer;
//import org.springframework.boot.autoconfigure.cache.RedisCacheManagerBuilderCustomizer;
//import org.springframework.cache.concurrent.ConcurrentMapCacheManager;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.redis.cache.RedisCacheConfiguration;
//import org.springframework.data.redis.cache.RedisCacheManager;
//import org.springframework.data.redis.connection.RedisConnectionFactory;
//
//import java.time.Duration;
//
//@Configuration(proxyBeanMethods = false)
//public class CacheManagerConfiguration {
//    @Bean
//    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
//        return RedisCacheManager.create(connectionFactory);
//    }
//
//    @Bean
//    public CacheManagerCustomizer<ConcurrentMapCacheManager> cacheManagerCacheManagerCustomizer() {
//        return (cacheManager) -> cacheManager.setAllowNullValues(false);
//    }
//
//    @Bean
//    public RedisCacheManagerBuilderCustomizer myRedisCacheManagerBuilderCustomizer() {
//        return (builder) -> builder
//                .withCacheConfiguration("cache1", RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofSeconds(10)))
//                .withCacheConfiguration("cache2", RedisCacheConfiguration.defaultCacheConfig().entryTtl(Duration.ofMillis(1)));
//    }
//}
