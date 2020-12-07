package com.gph.mycookery.domain.ingredient;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeIngredientRepository extends CrudRepository<RecipeIngredient,Long> {
    void deleteAllByRecipeId(long recipeId);
}
