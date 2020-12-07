package com.gph.mycookery.domain.notes;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.gph.mycookery.domain.recipe.Recipe;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RecipeNote {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String note;
    private LocalDateTime time;
    @ManyToOne
    @JoinColumn(name="recipeid")
    @JsonIgnore
    private Recipe recipe;
}
