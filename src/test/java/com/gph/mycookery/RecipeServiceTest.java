package com.gph.mycookery;

import com.gph.mycookery.domain.CategoryEnum;
import com.gph.mycookery.domain.Recipe;
import com.gph.mycookery.domain.RecipeService;
import com.gph.mycookery.web.CreateRecipeRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
public class RecipeServiceTest {

    @Autowired
    private RecipeService recipeService;

    @BeforeEach
    public void init () {
        CreateRecipeRequest firstRecipe = CreateRecipeRequest
                .builder()
                .title("First recipe")
                .instruction("Testing instruction")
                .category(CategoryEnum.dessert)
                .build();
        recipeService.createRecipe(firstRecipe);
    }

    @Test
    public void createNewRecipe () {
        CreateRecipeRequest newRecipe = CreateRecipeRequest
                .builder()
                .title("Second recipe")
                .instruction("Testing instruction")
                .category(CategoryEnum.dessert)
                .build();
        Recipe createdRecipe = recipeService.createRecipe(newRecipe);
        assertThat (createdRecipe.getId()).isNotNull();
        assertThat (createdRecipe.getTitle().equals("Second recipe"));
        assertThat (createdRecipe.getInstruction().equals("Testing instruction"));
        assertThat (createdRecipe.getCategory().equals(CategoryEnum.dessert));
    }

    @Test
    public void getRecipeByIdShouldReturnRecipe () {
        Recipe recipe = recipeService.getRecipe(Long.valueOf(1));
        assertThat (recipe.getId() == 1);
        assertThat (recipe.getTitle().equals("First recipe"));
        assertThat (recipe.getInstruction().equals("Testing instruction"));
        assertThat (recipe.getCategory().equals(CategoryEnum.dessert));
    }

    @Test
    public void getRecipesShouldReturnRecipeList () {
        List<Recipe> recipes = recipeService.getRecipes();
        assertThat (recipes.size() == 1);
    }
}
