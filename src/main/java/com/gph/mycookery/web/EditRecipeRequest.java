package com.gph.mycookery.web;

import com.gph.mycookery.domain.Recipe;
import com.gph.mycookery.domain.RecipeIngredient;
import com.gph.mycookery.domain.RecipeNote;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EditRecipeRequest {
    private long id;
    private String title;
    private String shortDescription;
    private String instruction;
    private List<CreateRecipeRequest.Ingredient> ingredients;
    private List<Note> notes;
    /**
     * Convert edit recipe input to recipe entity, to be persisted to the database
     *
     * @return Recipe object
     */
    public Recipe convertToEntity () {
        Recipe recipe = Recipe.builder()
                .id(getId())
                .title(getTitle())
                .shortDescription(getShortDescription())
                .instruction(getInstruction())
                .build();
        if (getIngredients() != null) {
            List<RecipeIngredient> recipeIngredients = getIngredients().stream()
                    .map(i -> i.convertToEntity(recipe))
                    .collect(Collectors.toList());
            recipe.setRecipeIngredients(recipeIngredients);
        }
        recipe.setRecipeNotes(getNotes().stream().map(note -> note.convertToEntity(recipe)).collect(Collectors.toList()));
        return recipe;
    }
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Note {
        private String note;
        public RecipeNote convertToEntity () {
            return RecipeNote.builder()
                    .note(getNote())
                    .time(LocalDateTime.now())
                    .build();
        }
        public RecipeNote convertToEntity (Recipe recipe) {
            RecipeNote note = convertToEntity();
            note.setRecipe(recipe);
            return note;
        }
    }
}
