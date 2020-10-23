package com.gph.mycookery.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;

/**
 * BaseClient provides functionalities to send requests to other servers. *
 */
@Component
public class BaseClient {
    private RestTemplate restTemplate;

    @Autowired
    public BaseClient(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }


    public <I, O> O doPost (String url, String authToken, I input ) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("Authorization",  authToken);
        headers.setAccept(Collections.singletonList(MediaType.APPLICATION_JSON));
        HttpEntity<I> entity = new HttpEntity<>(input, headers);
        try {
            ResponseEntity<O> response =
                    restTemplate.exchange(url,
                            HttpMethod.POST, entity, new ParameterizedTypeReference<O>() {
                            });
            return response.getBody();
        }catch (ResourceAccessException e) {
            throw e;
        }catch (HttpClientErrorException errorException) {
            throw errorException;
        } catch (HttpServerErrorException errorException) {
            throw errorException;
        } catch (RuntimeException errorException) {
            throw errorException;
        }
    }

    public <I> I doGet (String url) {
        ResponseEntity<I> response =
                restTemplate.exchange(url,
                        HttpMethod.GET, null, new ParameterizedTypeReference<I>() {
                        });
        return response.getBody();
    }
}
