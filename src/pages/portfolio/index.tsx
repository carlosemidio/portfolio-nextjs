import SocialLinks from '../../components/SocialLinks';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';
import Container from '../../components/Container';
import Image from 'next/image';
import projects from '../../utils/projects';
import ProjectCard from '../../components/ProjectCard';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContactForm from '../../components/ContactForm';
import {NotificationContainer} from 'react-notifications';
import { Box, Modal } from '@mui/material';
import Project from '../../components/Project';
import Link from 'next/link';

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [project, setProject] = useState(null)
  
  const projectsList = projects.map(_project => {
    return <ProjectCard
      openModal={() => {setOpenModal(true); setProject(_project)}}
      key={_project.headline}
      image={_project.image}
      link={_project.link}
      headline={_project.headline}
      description={_project.description} />
  })

  return (
    <>
      <div className="scene">
        <div className="wrap">
            <div className="wall wall-right"></div>
            <div className="wall wall-left"></div>   
            <div className="wall wall-top"></div>
            <div className="wall wall-bottom"></div> 
            <div className="wall wall-back"></div>    
        </div>
        <div className="wrap">
            <div className="wall wall-right"></div>
            <div className="wall wall-left"></div>   
            <div className="wall wall-top"></div>
            <div className="wall wall-bottom"></div>   
            <div className="wall wall-back"></div>    
        </div>
      </div>
      <div className={ styles.root }>
        <Head>
          <title>Carlos Emídio Dev</title>
        </Head>
        <SocialLinks />
        <Navbar />

        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ zIndex: 999 }}
        >
          <Box className={styles.modal}>
            <Project
              project={project}
              closeModal={() => setOpenModal(false)}
            />
          </Box>
        </Modal>

        <div className={styles.content}>
          <section className={ styles.portfolioSection } id="portfolio">
            <Container>
              <div className={ styles.portfolioBox }>
                <h1 className={ styles.sectionTitle }>
                  Projetos nos quais trabalhei
                </h1>

                <div className={ styles.portfolioList }>
                  { projectsList }
                </div>
              </div>
            </Container>
          </section>
        </div>
      </div>

      <NotificationContainer />
    </>
  );
}

export default Home;
