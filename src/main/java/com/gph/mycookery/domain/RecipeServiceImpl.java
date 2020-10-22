package com.gph.mycookery.domain;

import com.gph.mycookery.web.CreateRecipeRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    @Override
    public Recipe createRecipe (CreateRecipeRequest request) {
        return recipeRepository.save(request.convertToEntity());
    }
    @Override
    public List<Recipe> getRecipes () {
        return (List<Recipe>) recipeRepository.findAll();
    }

    //TODO Error not found
    @Override
    public Recipe getRecipe (Long id) {
        return recipeRepository.findById(id).get();
    }
}
