package com.my_profile.chat_service.exception;

public class AlreadyObjectException extends Exception {
    private static final long serialVersion = 1L;

    public AlreadyObjectException(String msg) {
        super(msg);
    }
}
