import React from 'react';
import {AppBar, Button, CssBaseline, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import CreateRecipe from "./pages/CreateRecipe";
import {makeStyles} from '@material-ui/core/styles';
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import DrawerMenu from "./pages/components/DrawerMenu";
import SnackbarNotification from "./pages/SnackBarNotification";
import {displayLoginDialog} from "./redux/actions/dialogActions"
import DialogManager from "./pages/components/DialogManager";
import {useDispatch, useSelector} from "react-redux";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {logoutAction} from "./redux/actions/authActions";
const drawerWidth = 240;
const drawerCloseWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginLeft: drawerCloseWidth,
    zIndex: 1,

  },
  appBarShift: {
    left: drawerWidth,
    width: "calc(100% - 240px)",

  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    marginLeft: drawerCloseWidth,
  },
  contentShift: {
    marginLeft: drawerWidth,
  },
}));


const App = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();
  const authState = useSelector(state => state.authReducer);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const login = () => {
    dispatch(displayLoginDialog());
  }

  const logout = () => {
    dispatch(logoutAction());
  }
  return (
    <div className="App">
      <DialogManager/>
      <Router>
        <CssBaseline/>
        <AppBar position="fixed" classes={{ root: open ? classes.appBarShift : classes.appBar }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap  style={{flexGrow: 1, textAlign: "left"}}>
              My Cookery
            </Typography>
            {
              authState.user === null ? <Button color="inherit" onClick={login}>Login</Button> : <h3 style={{alignContent: "center"}}>{authState.user.username} <ExitToAppIcon size="small" color="secondary" onClick={logout}/></h3>
            }

          </Toolbar>
        </AppBar>
        <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
        <main className={open ? classes.contentShift : classes.content}>
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path ="/newrecipe" component={CreateRecipe}/>
            <Route path ="/recipe/:id" component={Recipe}/>
            <Route render={() => <h1> Page not   found</h1>}/>
          </Switch>
        </main>
      </Router>
      <SnackbarNotification/>
    </div>
  );
}
export default App;
