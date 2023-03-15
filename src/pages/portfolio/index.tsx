import SocialLinks from '../../components/SocialLinks';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';
import Container from '../../components/Container';
import projects from '../../utils/projects';
import ProjectCard from '../../components/ProjectCard';
import { Box, Modal } from '@mui/material';
import Project from '../../components/Project';
import { useState } from 'react';

const Portfolio: React.FC = () => {
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
    <div className={ styles.root }>
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
                Alguns dos projetos nos quais trabalhei
              </h1>

              <div className={ styles.portfolioList }>
                { projectsList }
              </div>
            </div>
          </Container>
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
