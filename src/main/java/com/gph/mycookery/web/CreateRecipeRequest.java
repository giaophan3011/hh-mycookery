package com.gph.mycookery.web;

import com.gph.mycookery.domain.CategoryEnum;
import com.gph.mycookery.domain.Recipe;
import com.gph.mycookery.domain.RecipeIngredient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;
import java.util.stream.Collectors;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateRecipeRequest {
    private String title;
    private String instruction;
    @Enumerated(EnumType.STRING)
    private CategoryEnum category;
    private List<Ingredient> ingredients;

    /**
     * Convert recipe input to recipe entity, to be persisted to the database
     *
     * @return Recipe object
     */
    public Recipe convertToEntity () {
        Recipe recipe = Recipe.builder()
                .title(getTitle())
                .instruction(getInstruction())
                .category(getCategory())
                .recipeIngredients(getIngredients().stream()
                        .map(Ingredient::convertToEntity)
                        .collect(Collectors.toList()))
                .build();
        List<RecipeIngredient> recipeIngredients = getIngredients().stream()
                .map(i -> {
                    RecipeIngredient ri = i.convertToEntity();
                    ri.setRecipe(recipe);
                    return ri;
                })
                .collect(Collectors.toList());
        recipe.setRecipeIngredients(recipeIngredients);
        return recipe;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Ingredient {
        private String name;
        private float amount;
        private String unit;
        private float caloriesPer100g;
        public RecipeIngredient convertToEntity () {
            return RecipeIngredient.builder()
                    .amount(getAmount())
                    .name(getName())
                    .caloriesPer100g(getCaloriesPer100g())
                    .unit(getUnit())
                    .build();
        }
    }
}
