import { createStyles, makeStyles } from "@material-ui/core";

const MontserratRegular = {
  fontFamily: "Montserrat-Regular",
  fontStyle: "normal",
  src: `url("/fonts/montserrat/Montserrat-Regular.ttf")`,
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
        fontFamily: "Montserrat-Regular",
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: "#708090",
      },
    },
    "@font-face": [MontserratRegular],
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
