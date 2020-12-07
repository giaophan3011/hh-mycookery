package com.gph.mycookery.domain.recipe;

import com.gph.mycookery.domain.recipe.Recipe;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe,Long> {
}
