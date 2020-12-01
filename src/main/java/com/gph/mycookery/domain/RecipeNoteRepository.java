package com.gph.mycookery.domain;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeNoteRepository extends CrudRepository<RecipeNote,Long> {
    void deleteAllByRecipeId(long recipeId);
}
