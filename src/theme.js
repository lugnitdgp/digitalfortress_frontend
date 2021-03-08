import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: "#f00",
    },
    background: {
      default: '#fff',
    },
    cardbg: '#fff',
  },
});

export default theme;