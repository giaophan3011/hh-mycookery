package com.gph.mycookery.domain;

import com.gph.mycookery.web.CreateRecipeRequest;
import com.gph.mycookery.web.EditRecipeRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;
    @Autowired
    private RecipeIngredientRepository recipeIngredientRepository;
    @Autowired
    private RecipeNoteRepository recipeNoteRepository;

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

    @Override
    public Recipe editRecipe (EditRecipeRequest request) {
        if (request.getIngredients() != null & request.getIngredients().size() > 0)
            recipeIngredientRepository.deleteAllByRecipeId(request.getId());
        if (request.getNotes() != null & request.getNotes().size() > 0)
            recipeNoteRepository.deleteAllByRecipeId(request.getId());
        return recipeRepository.save(request.convertToEntity());
    }
}
