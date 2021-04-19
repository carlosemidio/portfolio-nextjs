import React, { useState, Fragment } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 800,
      height: 800,
      backgroundColor: "#ffffff",
      position: "relative",
    },
    image: {
      width: "100%",
    },
    title: {
      textAlign: "center",
      padding: 15,
    },
    description: {
      textAlign: "center",
    },
    closeIconBox: {
      position: "absolute",
      top: 10,
      right: 10,
    },
    closeIcon: {
      position: "relative",
      cursor: "pointer",
      zIndex: 0,
      backgroundColor: "rgba(0,0,0,.7)",
      color: "#ffffff",
    },
  })
);

function Project({ project, closeModal }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img
        className={classes.image}
        src={project.image}
        alt={project.headline}
      />
      <h1 className={classes.title}>{project.headline}</h1>
      <p className={classes.description}>{project.description}</p>
      <div className={classes.closeIconBox}>
        <CloseIcon onClick={closeModal} className={classes.closeIcon} />
      </div>
    </div>
  );
}

export default Project;
