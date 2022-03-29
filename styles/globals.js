import { createStyles, makeStyles } from "@material-ui/core";

const Montserrat = {
  fontFamily: "Montserrat",
  fontStyle: "normal",
  src: `url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap")`,
  fontDisplay: 'swap',
};

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
        outline: 0,
        boxSizing: "border-box",
        fontFamily: `"Montserrat", "sans-serif"`,
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: "#708090",
      },
    },
    "@font-face": [Montserrat],
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
