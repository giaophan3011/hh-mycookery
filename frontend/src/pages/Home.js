import React from "react";
import ApiService from "../services/APIServices";
import RecipeList from "./RecipeList";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(1),
      marginLeft: 20,
      width: 600
    },

}));
const Home = () => {
  const classes = useStyles();
  const [recipes, setRecipes] = React.useState([]);

  React.useEffect(()=> {
    ApiService.getRecipes()
      .then(response => setRecipes(response.data))
      .catch(err => alert(err));
  }, []);

  return (
    <div>
      {
        recipes === null || recipes.length === 0
        ? <p>No recipes to show</p>
          :  <RecipeList data={recipes} className={classes.root}/>
      }

    </div>
  );
}

export default Home;