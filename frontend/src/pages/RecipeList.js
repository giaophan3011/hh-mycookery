import React from "react";
import {useHistory} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Card, CardMedia } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import salad from "../static/images/salad.jpg"
import soup from "../static/images/soup.webp";
import appetizer from "../static/images/appetizer.jpg";
import bread from "../static/images/bread.jpg";
import drink from "../static/images/drinks.jpg";
import dessert from "../static/images/dessert.jpg";
import sideDish from "../static/images/side_dish.jpg";
import mainDish from "../static/images/main_dish.jpg";

const RecipeList = (props) => {
  let history = useHistory();
  const recipes = props.data;
  const handleClick = (id) => {
    history.push("/recipe/" + id);
  }

  const getCardMedia = (category) => {
    switch (category) {
      case "soup":
        return soup;
      case "appetizer":
        return appetizer;
      case "salads":
        return salad;
      case "bread":
        return bread;
      case "drink":
        return drink;
      case "dessert":
        return dessert;
      case "side_dish":
        return sideDish;
      default:
        return mainDish;
    }
  }
  return (
    <div style={{flexGrow: 1, margin: 20}}>
      <Grid container spacing={5} >
        {recipes.map(item => (
          <Grid item xs={12} sm={4} onClick={() => handleClick(item.id)}>
            <Card style={{maxWidth: 500, maxHeight:  500}}>
              <CardHeader
                title={item.title}
                subheader={item.category}
              />
              <CardMedia

                style={{height: "140" , paddingTop: '56.25%'}}
                image={getCardMedia(item.category)}
                title={item.category}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.shortDescription}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
              </CardActions>

            </Card>
          </Grid>
        ))}

      </Grid>

    </div>
  );
}

export default RecipeList;