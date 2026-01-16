package com.my_profile.chat_service.exception;

public class AccessDbException extends Exception {
    private static final long serialVersionUID = 1L;

    public AccessDbException(String msg) {
        super(msg);
    }
}
