import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const ingredientInitialState = {
  "name": "",
  "amount": "",
  "unit": "",
}

export default function AddIngredientDialog(props) {
  const [ingredient, setIngredient] = React.useState(ingredientInitialState);

  const handleClose = () => {
    props.setOpen(false);
    setIngredient(ingredientInitialState);
  };

  const handleTextFieldChange = (event) => {
    event.preventDefault();
    setIngredient({...ingredient, [event.target.id]: event.target.value});
  }

  const addIngredient = async () => {
    props.setIngredient(ingredient);
  }

  return (
    <Dialog open={props.dialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Add ingredient</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={ingredient.name}
          onChange={handleTextFieldChange}
        />
        <TextField
          margin="dense"
          id="amount"
          label="Amount"
          type="number"
          fullWidth
          value={ingredient.amount}
          onChange={handleTextFieldChange}
        />
        <TextField
          margin="dense"
          id="unit"
          label="Unit"
          type="text"
          fullWidth
          value={ingredient.unit}
          onChange={handleTextFieldChange}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {
          addIngredient();
          handleClose();
        }} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>

  );
}