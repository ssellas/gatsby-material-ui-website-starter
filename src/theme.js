import {createMuiTheme} from '@material-ui/core/styles';

const white = '#fff';
const black = '#000';
const primary = '#2196f3';
const secondary = '#f50057';

const error = '#F00';

const theme = createMuiTheme({
  palette: {
    white,
    black,
    primary: {
      main: primary,
      contrastText: white,
    },
    secondary: {
      main: secondary,
      contrastText: white,
    },
    error: {
      main: error,
    },
    background: {
      default: white,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '64px',
      fontWeight: 'bold',
      color: black
    },
    h2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '36px',
      fontWeight: 'bold',
      color: black
    },
    h3: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '24px',
      fontWeight: 'bold',
      color: black
    },
    h4: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '22px',
      fontWeight: 'bold',
      color: black
    },
    h5: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '16px',
      fontWeight: 'bold',
      color: black
    },
    body1: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '20px',
      fontWeight: '300',
      color: black
    },
    body2: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '18px',
      fontWeight: 'normal',
      color: black
    },
    subtitle1: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '16px',
      fontWeight: 'normal',
      color: black
    },
    subtitle2: {
      fontFamily: 'Lato, sans-serif',
      fontSize: '14px',
      fontWeight: '500',
      color: black
    }
  }
});

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '20px',
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
  },
};

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
  },
};

export default theme;
