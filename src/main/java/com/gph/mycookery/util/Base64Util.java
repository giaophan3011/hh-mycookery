package com.gph.mycookery.util;

import java.util.Base64;

public class Base64Util {

    public static String encode(String str) {
        return Base64.getEncoder().encodeToString(str.getBytes());
    }

    public static String decode(String str) {
        return String.valueOf(Base64.getDecoder().decode(str));
    }
}

