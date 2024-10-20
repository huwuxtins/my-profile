package com.my_profile.notification_service.exception;

public class AccessDbException extends Exception {
    private static final long serialVersionUID = 1L;

    public AccessDbException(String msg) {
        super(msg);
    }
}
