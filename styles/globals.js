import { createStyles, makeStyles } from "@material-ui/core";

const MontserratRegular = {
  fontFamily: "Montserrat-Regular",
  fontStyle: "normal",
  src: `url("/fonts/montserrat/Montserrat-Regular.ttf")`,
};

const MontserratLight = {
  fontFamily: "Montserrat-Light",
  fontStyle: "medium",
  src: `url("/fonts/montserrat/Montserrat-Light.ttf")`,
};

const MontserratBold = {
  fontFamily: "Montserrat-Bold",
  fontStyle: "medium",
  src: `url("/fonts/montserrat/Montserrat-Bold.ttf")`,
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
    "@font-face": [MontserratLight, MontserratRegular, MontserratBold],
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
