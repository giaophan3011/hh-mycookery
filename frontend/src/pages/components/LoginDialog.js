import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import {closeDialog} from "../../redux/actions/dialogActions";
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loginMiddleware} from "../../redux/middlewares/authMiddleware";
import {logoutAction} from "../../redux/actions/authActions";

const authInitialState = {
  "username": "",
  "password": ""
}

export default function LoginDialog () {
  const [user, setUser] = React.useState(authInitialState);
  const dispatch = useDispatch();
  const dialogState = useSelector(state => state.dialogReducer);
  const handleClose = () => {
    dispatch(closeDialog());
    setUser(authInitialState);

  };

  const handleTextFieldChange = (event) => {
    event.preventDefault();
    setUser({...user, [event.target.id]: event.target.value});
  }

  const login = () => {
    dispatch(loginMiddleware(user));
  }

  return (
    <Dialog open={dialogState.dialogOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="username"
          label="Username"
          type="text"
          fullWidth
          value={user.name}
          onChange={handleTextFieldChange}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="text"
          fullWidth
          value={user.password}
          onChange={handleTextFieldChange}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {
          login();
          handleClose();
        }} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>

  );
}