import React from "react";
import {Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText,} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TodayIcon from "@material-ui/icons/Today";
import FastfoodIcon from '@material-ui/icons/Fastfood';
import EqualizerIcon from "@material-ui/icons/Equalizer";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const drawerWidth = 240;
const drawerCloseWidth = 0;

const useStyles = makeStyles((theme) => ({
  drawerOpen: {
    width: drawerWidth,
  },
  drawerClose: {
    width: drawerCloseWidth,
    overflowX: "hidden",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    toolbar: theme.mixins.toolbar,
  },
  toolbarHidden: {
    zIndex: -1,
    toolbar: theme.mixins.toolbar,
  },
}));

const drawerMenu = [
  { text: "Add recipe", route: "/newrecipe" },
  { text: "Recipes", route: "/" },
];

export default function DrawerMenu({ open, handleDrawerClose }) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleNavigate = (route) => {
    history.push(route);
  };

  return (
    <Drawer
      variant="persistent"
      open={open}
      className={open ? classes.drawerOpen : classes.drawerClose}
    >
      <div className={open ? classes.toolbar : classes.toolbarHidden}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List style={{ width: drawerWidth }}>
        {drawerMenu.map((item, index) => (
          <ListItem button key={item.text} onClick={() => handleNavigate(item.route)}>
            <ListItemIcon>
              {index === 0 ? (
                <NoteAddIcon/>
              ) : index === 1 ? (
                <FastfoodIcon/>
              ) : index === 2 ? (
                <TodayIcon />
              ) : (
                <EqualizerIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
