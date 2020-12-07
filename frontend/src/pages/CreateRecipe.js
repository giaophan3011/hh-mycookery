import React from "react";
import {
  Button,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ApiService from "../services/APIServices";
import AddIngredientDialog from "./components/AddIngredientDialog";
import {createRecipeMiddleware} from "../redux/middlewares/apiMiddlewares";
import {useDispatch, useSelector} from "react-redux";
import {loginMiddleware} from "../redux/middlewares/authMiddleware";
import {displayLoginDialog} from "../redux/actions/dialogActions";

const categories = [
  "soup", "appetizer", "salads", "bread", "drink", "dessert", "main_dish", "side_dish"
];

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 20,
    marginTop: 20,
    marginRight: 20,
    textAlign: "left"
  },
  createForm: {
    "& div": {
      marginTop: 10,
    }
  },
  tableHeader: {
    fontWeight: "bold"
  }

}));

const CreateRecipe = () => {
  const classes = useStyles();
  const [recipe, setRecipe]= React.useState({"title": "", "instruction": "", "category": categories[0], "shortDescription": "", "ingredients": []});
  const [openDialog, setOpenDialog]=React.useState(false);
  const authState = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  const handleChange = event => {
    event.preventDefault();
    setRecipe({...recipe, [event.target.name]: event.target.value});
  };


  const handleSubmit = event => {
    event.preventDefault();
    if (authState.user === null) {
      dispatch(displayLoginDialog());
    } else {
      dispatch(createRecipeMiddleware(recipe,authState.user));
    }

  }

  const addIngredient  = (ingredient) => {
    setRecipe({...recipe, ingredients: recipe.ingredients.concat([ingredient])});
  }

  return (
    <div className={classes.root}>
    <form  noValidate autoComplete="off" fullWidth className={classes.createForm}>
      <div>
        <TextField
          autoFocus
          name="title"
          required
          fullWidth
          id="new-recipe-title"
          label="Title"
          value={recipe.title}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          name="category"
          id="new-recipe-category"
          select
          label="Category"
          value={recipe.category}
          onChange={handleChange}
          size="medium"
          style={{minWidth: 200}}
        >
          {categories.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          name="shortDescription"
          variant="outlined"
          fullWidth
          id="new-recipe-short-description"
          label="Short description"
          rows={3}
          multiline
          rowsMax="100"
          value={recipe.shortDescription}
          onChange={handleChange}
        />
      </div>
      <div>
        <TableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left" className={classes.tableHeader}>Ingredients</TableCell>
                <TableCell align="right" className={classes.tableHeader}>Amount</TableCell>
                <TableCell align="right" className={classes.tableHeader}>Unit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {recipe.ingredients.length === 0
                ? <TableRow key="no-data" style={{textAlign: "center", borderBottom: "none"}}>
                  <TableCell>
                    No data
                  </TableCell>
                </TableRow>
                : recipe.ingredients.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.amount}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                </TableRow>
              ))}
              <TableRow style={{borderTop: "none"}}>
                <Button
                  color="primary"
                  size="small"
                  style={{ marginTop: 10, fontSize: 12 }}
                  onClick={() => setOpenDialog(true)}
                >
                  Add ingredient
                </Button>
                <Button
                  color="secondary"
                  size="small"
                  style={{ marginTop: 10, fontSize: 12 }}
                //  onClick={() => handleFetchTrainings()}
                >
                  {" "}
                  Reload{" "}
                </Button>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div>
        <TextField
          name="instruction"
          fullWidth
          id="new-recipe-instruction"
          label="Instruction"
          variant="outlined"
          multiline
          rowsMax="100"
          rows={10}
          value={recipe.instruction}
          onChange={handleChange}
        />
      </div>
      <div style={{textAlign: "center"}}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.root && classes.button }
          onClick={handleSubmit}>
          Create
        </Button>
      </div>
    </form>
      <AddIngredientDialog setIngredient={addIngredient} setOpen={setOpenDialog} dialogOpen={openDialog}/>
    </div>
  );
}

export default CreateRecipe;