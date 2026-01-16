package com.my_profile.chat_service.exception;

public class ClientServiceException extends Exception{
    private static final long serialVersionUID = 1L;

    public ClientServiceException(String msg){
        super(msg);
    }
}
