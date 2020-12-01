package com.gph.mycookery.domain;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Recipe {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String title;
    private String shortDescription;
    private String instruction;
    @Enumerated(EnumType.STRING)
    private CategoryEnum category;
    @OneToMany(cascade=CascadeType.ALL,mappedBy="recipe", fetch = FetchType.EAGER)
    private List<RecipeIngredient> recipeIngredients;
    //Notes are only added, cannot be changed
    @OneToMany(cascade=CascadeType.ALL,mappedBy="recipe")
    private List<RecipeNote> recipeNotes;
}
