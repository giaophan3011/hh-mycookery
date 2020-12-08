package com.gph.mycookery;

import com.gph.mycookery.web.RecipeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("dev")
public class MycookeryApplicationTests {

	@Autowired
	private RecipeController recipeController;

	@Test
	void contextLoads() {
		assertThat(recipeController).isNotNull();
	}

}
