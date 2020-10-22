package com.gph.mycookery.web;

import com.gph.mycookery.domain.CategoryEnum;
import com.gph.mycookery.domain.Recipe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateRecipeRequest {
    private String title;
    private String instruction;
    @Enumerated(EnumType.STRING)
    private CategoryEnum category;

    /**
     * Convert recipe input to recipe entity, to be persisted to the database
     *
     * @return Recipe object
     */
    public Recipe convertToEntity () {
        return Recipe.builder()
                .title(getTitle())
                .instruction(getInstruction())
                .category(getCategory())
                .build();
    }
}
