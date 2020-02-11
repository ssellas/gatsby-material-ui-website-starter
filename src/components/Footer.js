import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Logo from '../images/bond-logo-white.svg'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {Facebook, Instagram, LinkedIn, Twitter} from "@material-ui/icons";
import GatsbyLink from "./utility/GatsbyLink";
import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from "@material-ui/core/Hidden";
import clsx from "clsx";
import ConnectForm from "./forms/ConnectForm";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

export default function Footer(props) {
  const {...rest} = props;

  const classes = useStyles();

  return (
      <footer className={classes.root} {...rest}>

      </footer>
  );
}

