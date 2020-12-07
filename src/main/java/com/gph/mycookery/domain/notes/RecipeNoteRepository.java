package com.gph.mycookery.domain.notes;

import com.gph.mycookery.domain.notes.RecipeNote;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeNoteRepository extends CrudRepository<RecipeNote,Long> {
    void deleteAllByRecipeId(long recipeId);
}
