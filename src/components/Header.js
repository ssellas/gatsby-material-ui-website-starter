import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles(theme => ({
  appBar: {
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const {height = 86, ...rest} = props;

  const classes = useStyles();


  return (
      <header {...rest}>
        <AppBar position='fixed' color={"inherit"} className={classes.appBar}>
          <Toolbar>

          </Toolbar>
        </AppBar>
      </header>
  );
}
