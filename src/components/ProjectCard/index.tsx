import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import styles from './styles.module.scss';

interface ImageProps {
    alt: string;
    src: string;
}

interface IProject {
    openModal: () => void;
    image: ImageProps;
    link?: string;
    headline: string;
    description: string;
}
 
const ProjectCard: React.FC<IProject> = ({ openModal, image, link, headline, description }) => {
  return <div className={ styles.card }>
    <div className={ styles.cardImage }>
        <Image alt={ image.alt } src={ image.src } layout='fill' />
    </div>
    <div className={styles.cardBody}>
        <h1>{ headline }</h1>

        <p className={ styles.cardDescription }>{ description }</p>
    </div>

    <Button
      onClick={openModal}
      size="small"
      color="primary"
      className={styles.text}
    >
      Ver detalhes
    </Button>
  </div>;
}

export default ProjectCard;