package com.gph.mycookery;

import com.gph.mycookery.auth.User;
import com.gph.mycookery.auth.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication

public class MycookeryApplication {

	public static void main(String[] args) {
		SpringApplication.run(MycookeryApplication.class, args);
	}
	@Bean
	public RestTemplate restTemplate() {
		RestTemplate restTemplate = new RestTemplate();
		return restTemplate;
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public CommandLineRunner demo(UserRepository urepository){
		return(args) -> {
			User user1 = User.builder().username("user").passwordHash("$2y$12$rU28D7Jxkg9SFKZMqGj67u96kztADD/y5AqEWJrNNM0z8kvcXb4xq").role("USER").build();
			User user2 = User.builder().username("admin").passwordHash("$2y$12$rU28D7Jxkg9SFKZMqGj67u96kztADD/y5AqEWJrNNM0z8kvcXb4xq").role("ADMIN").build();
			urepository.save(user1);
			urepository.save(user2);
		};
	}
}
