import SocialLinks from '../../components/SocialLinks';
import Navbar from '../../components/Navbar';

import styles from './styles.module.scss';
import Container from '../../components/Container';
import projects from '../../utils/projects';
import ProjectCard from '../../components/ProjectCard';

const Portfolio: React.FC = () => {
  const projectsList = projects.map(project => {
    return <ProjectCard
      key={project.headline}
      image={project.image}
      link={project.link}
      headline={project.headline}
      description={project.description} />
  })

  return (
    <div className={ styles.root }>
      <SocialLinks />
      <Navbar />

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
