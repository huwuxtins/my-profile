package com.my_profile.chat_service.socket;

import com.corundumstudio.socketio.SocketIOServer;
import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Component
@Slf4j
@SuppressWarnings("unused")
public class SocketServer {
    private final SocketIOServer server;

    public SocketServer(SocketIOServer server) {
        this.server = server;
    }

    @PostConstruct
    public void initListeners(){

    }
}
