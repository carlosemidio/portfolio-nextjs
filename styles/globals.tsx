import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    "@global": {
      "*": {
        margin: 0,
        padding: 0,
        outline: 0,
        boxSizing: "border-box",
      },
      body: {
        margin: 0,
        padding: 0,
        backgroundColor: "#708090",
      },
    },
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
