import React from "react";
import {useParams} from "react-router-dom";
import ApiService from "../services/APIServices";
import {makeStyles} from "@material-ui/core/styles";
import {Divider, TextField} from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';
import {useDispatch, useSelector} from "react-redux";
import {displayLoginDialog} from "../redux/actions/dialogActions";
import {createRecipeMiddleware} from "../redux/middlewares/apiMiddlewares";
const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
    marginLeft: 20,
    textAlign: "left"
  },
  summary: {
    fontStyle: "italic"
  },
  ingredient: {
    padding: 10,
    backgroundColor: "#D8C2CC",
    "& div": {
      padding: 10,
    }
  },
  instruction: {
    padding: 10,
    backgroundColor: "#F9EAEA",
    borderStyle: "dashed",
    borderColor: "#B696A4",
    "& div": {
      padding: 10,
    }
  }

}));
const Recipe = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState(null);
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  React.useEffect(()=> {
    ApiService.getRecipe(id)
      .then(response => setRecipe(response.data))
      .catch(err => alert(err));
  }, []);

  const addNote = (note) => {
    if (authState.user === null) {
      dispatch(displayLoginDialog());
    } else {
      ApiService.editRecipe({
        ...recipe,
        notes: recipe.recipeNotes.concat(note),
        ingredients: recipe.recipeIngredients,

      }, authState.user)
        .then(response => setRecipe(response.data))
        .catch(err => alert(err));
    }

  }



  return (
    <div>
      {recipe == null ? <p>...Loading</p> :
        <div className={classes.root}>
          <h2>{recipe.title}</h2>
          <h4>Category: {recipe.category}</h4>
          <p className={classes.summary}>{recipe.shortDescription}</p>
          <Ingredient data={recipe.recipeIngredients}/>
          <Instruction data={recipe.instruction}/>
          <Note data={recipe.recipeNotes} addNote = {addNote}/>
        </div>
      }
    </div>
  );
}

export default Recipe;

const Ingredient = (props) => {
  const classes = useStyles();
  return (<div>
    <h4>Ingredients</h4>
    <div className={classes.ingredient}>
      {props.data.map( i =>  <li>{i.name} {i.amount} {i.unit}</li>)}
    </div>
  </div>
      );
}

const Instruction = (props) => {
  const classes = useStyles();
  return <div>
    <h4>Instruction</h4>
    <div className={classes.instruction}>
    <p>{props.data}</p>
    </div>
  </div>
}

const Note = (props) => {
  const [comment, setComment] = React.useState("");
  return <div>
    <Divider/>
    <h4>Notes</h4>
    {
      props.data.map(note => <p>{note.note}</p>)
    }
    <div>
      <TextField
        name="note"
        fullWidth
        id="new-recipe-short-description"
        label="Add a note"
        variant="outlined"
        multiline
        rowsMax="100"
        value={comment}
        onChange={(event) => {
          event.preventDefault();
          setComment(event.target.value);
        }}
        InputProps={{endAdornment: <SendIcon onClick={() => {
          if (comment !== null && comment.length != 0) props.addNote(comment);
          setComment("");

          }}/>}}

      />
    </div>
  </div>
}