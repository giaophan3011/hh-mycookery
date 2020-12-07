package com.gph.mycookery.domain.ingredient;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gph.mycookery.domain.recipe.Recipe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecipeIngredient {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String name;
    private float amount;
    private String unit;
    private float caloriesPer100g;
    @ManyToOne
    @JoinColumn(name="recipeid")
    @JsonIgnore
    private Recipe recipe;
}
