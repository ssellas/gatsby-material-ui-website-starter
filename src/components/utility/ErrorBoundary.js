import React from "react";
import {headerHeight} from "../Layout";
import Typography from "@material-ui/core/Typography";
import { Link } from "gatsby"
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  root: {
    minHeight: `calc(100vh - ${headerHeight}px)`,
    padding: theme.spacing(2),
    color: theme.palette.dark,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxHeight: 416,
    objectFit: 'contain',
    marginBottom: theme.spacing(4)
  },
  typography: {
    marginBottom: theme.spacing(4)
  }
});

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      const { classes } = this.props;
      // You can render any custom fallback UI
      return (
          <Box className={classes.root}>
            <Typography variant='h3'>
              Oops! Something went wrong.
            </Typography>
            <Link to={'/'}>
              <Button variant='contained' color='primary'>
                Return to Home
              </Button>
            </Link>
          </Box>
      )
    }

    return this.props.children;
  }
}

export default withStyles(styles)(ErrorBoundary);
