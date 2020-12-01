package com.gph.mycookery.exception;

public class AuthenticationException extends RuntimeException {
    private String message;

    public AuthenticationException(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public String getError() {
        return "AuthenticationException";
    }
}
