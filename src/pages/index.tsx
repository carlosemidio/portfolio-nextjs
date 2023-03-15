import SocialLinks from '../components/SocialLinks';
import Navbar from '../components/Navbar';

import styles from './styles.module.scss';
import Container from '../components/Container';
import Image from 'next/image';
import projects from '../utils/projects';
import ProjectCard from '../components/ProjectCard';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import ContactForm from '../components/ContactForm';
import {NotificationContainer} from 'react-notifications';
import { Box, Button, Modal } from '@mui/material';
import Project from '../components/Project';
import Link from 'next/link';

const aboutText = [
  'Olá, Seja muito bem vindo(a)',
  'Sou dev web a mais de 5 anos',
  'Trabalho com algumas das linguagens e frameworks web mais utilizados na atualidade',
  'Já desenvolvi várias aplicações em diversos seguimentos ao longo desses anos',
  'Continue navegando e conheça um pouco do meu trabalho'
]

const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState(false)
  const [project, setProject] = useState(null)
  const [_text, setText] = useState('')
  const [invert, setInvert] = useState(true)
  const [row, setRow] = useState(aboutText.length-1)
  const [col, setCol] = useState(0)

  const projectsList = projects.slice(1, 5).map(_project => {
    return <ProjectCard
      openModal={() => {setOpenModal(true); setProject(_project)}}
      key={_project.headline}
      image={_project.image}
      link={_project.link}
      headline={_project.headline}
      description={_project.description} />
  })

  useEffect(() => {
    let interval = null
      interval = setInterval(() => {
        if (!invert && (row < aboutText.length)) {
          let aux = _text+aboutText[row][col]
          setText(aux)
          
          if (col < (aboutText[row].length - 1)) {
            setCol((col => col + 1))
          } else {
            setInvert(true)
          }
        } else {
          if (col > 0) {
            setText(aboutText[row].substring(0, col))
            setCol((col => col - 1))
          } else {
            setText("")
            setInvert(false)
            setCol(0)
            if (row >= aboutText.length) {
              setRow(0)
            } else {
              setRow(row => row + 1)
            }
          }
        }
      }, 50)

    return () => clearInterval(interval);

  }, [_text, row, col, invert])

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
          <section className={ styles.aboutSection }>
            <Container>
              <div className={ styles.aboutBox }>
                <div className={ styles.aboutImageBox }>
                  <Image className={styles.image}
                    alt='perfil'
                    width="300px"
                    height="308px"
                    src="/perfil.png" />
                </div>
                <div className={ styles.aboutTeminal }>
                  <div className={ styles.aboutTeminalHeader }>
                    <span className={ styles.aboutTeminalHeaderButtonClose }>x</span>
                    <span className={ styles.aboutTeminalHeaderButtonMinimize }></span>
                    <span className={ styles.aboutTeminalHeaderButtonMaximize }></span>
                    <span className={ styles.aboutTeminalHeaderTitle }> carlosemídio: ~</span>
                  </div>
                  <div className={ styles.aboutText } id="aboutText"><span>carlosemídio:~$ </span>{ _text }<span className={styles.cursor}></span></div>
                </div>
              </div>
            </Container>
          </section>

          <section className={ styles.portfolioSection } id="portfolio">
            <Container>
              <div className={ styles.portfolioBox }>
                <h1 className={ styles.sectionTitle }>
                  Projetos nos quais trabalhei
                </h1>

                <div className={ styles.portfolioList }>
                  { projectsList }
                </div>

                <div>
                  <Link href="/portfolio"><Button color='primary' variant='contained'>Ver todos os projetos</Button></Link>  
                </div>
              </div>
            </Container>
          </section>

          <section className={ styles.portfolioSection } id="contact">
            <Container>
              <div className={ styles.portfolioBox }>
                <h1 className={ styles.sectionTitle }>
                  Entre em contato comigo
                </h1>

                <div className={ styles.portfolioList }>
                  <ContactForm />
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
