package com.gph.mycookery.domain;

import com.gph.mycookery.web.CreateRecipeRequest;

import java.util.List;

public interface RecipeService {
    Recipe createRecipe (CreateRecipeRequest request);
    List<Recipe> getRecipes ();
    Recipe getRecipe (Long id);
}
