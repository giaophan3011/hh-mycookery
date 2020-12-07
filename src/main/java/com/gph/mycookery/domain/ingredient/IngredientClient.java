package com.gph.mycookery.domain.ingredient;

import com.gph.mycookery.util.BaseClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class IngredientClient {
    private BaseClient baseClient;

    @Value("${spoonacular.api.key}")
    private String API_KEY;

    @Autowired
    public IngredientClient (BaseClient baseClient) {
        this.baseClient = baseClient;
    }

    public RecipeIngredient getIngredientInformation (String ingredientId) {
        String url = "https://api.spoonacular.com/food/ingredients/" + ingredientId + "/information?amount=100&unit=grams&apiKey=" + API_KEY;
        Map<String, Object> ingredientInfo = baseClient.doGet(url);
        return null;
    }
}
