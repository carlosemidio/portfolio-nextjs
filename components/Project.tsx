import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import CloseIcon from '@material-ui/icons/Close';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Gallery from '../components/Gallery';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 800,
      width: '100%',
      height: 'auto',
      backgroundColor: '#ffffff',
      position: 'relative',
      paddingBottom: 30,
    },
    image: {
      width: '100%',
    },
    title: {
      textAlign: 'center',
      padding: 15,
    },
    description: {
      textAlign: 'center',
    },
    closeIconBox: {
      position: 'absolute',
      top: 10,
      right: 10,
    },
    closeIcon: {
      position: 'relative',
      cursor: 'pointer',
      zIndex: 0,
      backgroundColor: 'rgba(0,0,0,.7)',
      color: '#ffffff',
    },
    fullscreenIconBox: {
      position: 'absolute',
      top: 10,
      left: 10,
    },
    fullscreenIcon: {
      position: 'relative',
      cursor: 'pointer',
      zIndex: 0,
      backgroundColor: 'rgba(0,0,0,.7)',
      color: '#ffffff',
    },
  })
);

function Project({ project, closeModal }) {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.root}>
      <Gallery images={project.images} isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className={classes.title}>{project.headline}</h1>
      <p className={classes.description}>{project.description}</p>
      <div className={classes.closeIconBox}>
        <CloseIcon onClick={closeModal} className={classes.closeIcon} />
      </div>
      <div className={classes.fullscreenIconBox}>
        <FullscreenIcon
          onClick={() => setIsOpen(true)}
          className={classes.fullscreenIcon}
        />
      </div>
    </div>
  );
}

export default Project;
