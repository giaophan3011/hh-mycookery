package com.gph.mycookery.web;

import com.gph.mycookery.domain.Recipe;
import com.gph.mycookery.domain.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class RecipeController {

    @Autowired
    private RecipeService recipeService;

    @PostMapping("/v1/recipe")
    public Recipe createRecipe (@RequestBody CreateRecipeRequest request) {
        return recipeService.createRecipe(request);
    }
    @GetMapping("/v1/recipes")
    public List<Recipe> getRecipes () {
        return recipeService.getRecipes();
    }
    //TODO Error not found
    @GetMapping("/v1/recipes/{id}")
    public Recipe getRecipe (@PathVariable("id")Long id) {
        return recipeService.getRecipe(id);
    }

}
