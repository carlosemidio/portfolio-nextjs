import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import Gallery from '../Gallery';
import styles from './styles.module.scss';

function Project({ project, closeModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.root}>
      <Gallery images={project.images} isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className={styles.title}>{project.headline}</h1>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.closeIconBox}>
        <CloseIcon onClick={closeModal} className={styles.closeIcon} />
      </div>
      <div className={styles.fullscreenIconBox}>
        <FullscreenIcon
          onClick={() => setIsOpen(true)}
          className={styles.fullscreenIcon}
        />
      </div>
    </div>
  );
}

export default Project;