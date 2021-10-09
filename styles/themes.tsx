import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    mediumColor: string;
    section: string;
    postText: string;
    postAuthorDescription: string;
    border: string;
    toobarLink: string;
    navbarLink: string;
    backgroundColor: string;
    footerBackground: string;
    footerText: string;
    footerLink: string;
    drawerBorder: string;
    title: Palette['primary'];
  }
  interface PaletteOptions {
    mediumColor: string;
    section: string;
    postText: string;
    postAuthorDescription: string;
    border: string;
    toobarLink: string;
    navbarLink: string;
    backgroundColor: string;
    footerBackground: string;
    footerText: string;
    footerLink: string;
    drawerBorder: string;
    title: PaletteOptions['primary'];
  }
}

// Dark theme
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
      light: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#EBFF01',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    mediumColor: '#000000',
    section: '#ffffff',
    postText: '#ffffff',
    postAuthorDescription: '#ffffff',
    border: '1px solid #ffffff',
    toobarLink: '#EBFF01',
    navbarLink: '#EBFF01',
    backgroundColor: '#000000',
    footerBackground: '#000000',
    footerText: '#ffffff',
    footerLink: '#EBFF01',
    drawerBorder: '1px solid #ffffff',
    title: {
      main: '#ffffff',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
});

// Create a theme instance.
export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#03933D',
      light: '#A9E574',
    },
    secondary: {
      main: '#556cd6',
      light: '#ffffff',
    },
    mediumColor: '#70CA1D',
    section: '#03933D',
    postText: '#000000',
    postAuthorDescription: '#2c2f34',
    border: 'none',
    toobarLink: '#ffffff',
    navbarLink: '#000000',
    backgroundColor: '#ffffff',
    footerBackground: '#25272E',
    footerText: '#666666',
    footerLink: '#666666',
    drawerBorder: 'none',
    title: {
      main: '#72A26A',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
});
