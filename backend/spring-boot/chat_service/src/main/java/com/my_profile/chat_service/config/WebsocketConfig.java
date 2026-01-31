package com.my_profile.chat_service.config;

import com.corundumstudio.socketio.Configuration;
import com.corundumstudio.socketio.SocketIOServer;
import jakarta.annotation.PreDestroy;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@RequiredArgsConstructor
public class WebsocketConfig {
    @Value("${socket.host}")
    private String host;
    @Value("${socket.port}")
    private int port;


    private SocketIOServer server;
    @Bean
    public SocketIOServer socketIOServer() {
        Configuration config = new Configuration();

        config.setHostname(host);
        config.setPort(port);
        config.setOrigin("*");
        config.setContext("/socket.io/meeting");

        server = new SocketIOServer(config);
        server.start();

        server.addConnectListener((client) -> {
            String userId = client.getHandshakeData().getSingleUrlParam("userId");
            log.info("Client join socket{}", userId);
        });
        server.addDisconnectListener(client -> log.info("Client disconnected: {}", client.getSessionId()));

        return server;
    }

    @PreDestroy
    public void stopSocketServer() {
        this.server.stop();
    }
}
