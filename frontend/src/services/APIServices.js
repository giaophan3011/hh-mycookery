import axios from "axios";

class ApiService {

  static get APP_PATH() {
    return "http://localhost:8082";
  }


  static createRecipe (data, user) {
    return axios.post(
      this.APP_PATH + "/v1/recipe",
      { ...data },
      {
        headers: {
          "Authorization": "Basic " + btoa(`${user.username}:${user.password}`)
        }
      }
    );
  }

  static getRecipes () {
    return axios.get(
      this.APP_PATH + "/public/v1/recipes"
    );
  }

  static getRecipe (id) {
    return axios.get(
      this.APP_PATH + "/public/v1/recipes/" + id
    );
  }

  static editRecipe (recipe, user) {
    return axios.post(
      this.APP_PATH + "/v1/recipes/" + recipe.id,
      { ...recipe },
      {
        headers: {
          "Authorization": "Basic " + btoa(`${user.username}:${user.password}`)
        }
      }
    );
  }

  static login (user) {
    return axios.post(
      this.APP_PATH + "/login",
      {...user}
    );
  }

}

export default ApiService;