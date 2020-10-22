package com.gph.mycookery;

import com.gph.mycookery.web.RecipeController;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MycookeryApplicationTests {

	@Autowired
	private RecipeController recipeController;

	@Test
	void contextLoads() {
		assertThat(recipeController).isNotNull();
	}

}
