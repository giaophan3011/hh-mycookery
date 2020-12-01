package com.gph.mycookery.util;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;

public class DateTimeUtil {

    public static LocalDateTime convertEpochTimeToLocalDateTime (long epochTime) {
        //TODO check null param
        return LocalDateTime.ofInstant(Instant.ofEpochMilli(epochTime), ZoneId.systemDefault());
    }
}
