import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import useStyles from '../styles/home';

function Home() {
  const classes = useStyles();

  if (typeof window === 'object') {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
        });
      });
    });
  }

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Head>
        <title key="title">Carlos Emídio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="description" content="Desenvolvedor web freelancer" />
        <meta
          name="keywords"
          key="keywords"
          content="carlos,emidio,emídio,freelancer,web,php,node,react,reactjs,laravel,sistema,sistemas"
        />
        <meta name="author" content="Carlos Emídio" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="Carlos Emídio" key="twhandle" />

        {/* Open Graph */}
        <meta property="OG TAG" content="VALOR" />
        <meta property="og:title" content="Carlos Emídio" />
        <meta property="og:image" content="/perfil.png" />
        <meta property="og:image:type" content="image/*" />
        <meta
          property="og:description"
          content="Desenvolvedor web freelancer"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.carlosemidio.com.br/" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Carlos Emídio" />
        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-Regular.ttf&display=swap"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={classes.root} id="home">
        <Layout>
          <>
            <SocialLinks />
            <ul className={classes.navbar}>
              <li>
                <a href="#about">QUEM SOU</a>
              </li>
              <li>
                <a href="#whatido">O QUE FAÇO</a>
              </li>
              <li>
                <Image
                  src="/perfil.png"
                  alt="Imagem de perfil"
                  width={200}
                  height={200}
                  className={classes.profileImage}
                />
              </li>
              <li>
                <a href="#portfolio">PORTFÓLIO</a>
              </li>
              <li>
                <a href="#contact">FALE COMIGO</a>
              </li>
            </ul>
            <div className={classes.profileMobile}>
              <Image
                src="/perfil.png"
                alt="Imagem de perfil"
                width={200}
                height={200}
                className={classes.profileImage} />
            </div>
            <div className={classes.backgroundBox}>
              <div className={classes.textFromLeft}>
                Desenvolvendo soluções inteligentes
              </div>
            </div>
            <div className={classes.backgroundBox}>
              <div className={classes.textFromRight}>
                Sob medida para o seu negócio
              </div>
            </div>
            <p className={classes.sectionTitle} id="about">
              Sobre mim
            </p>
            <div className={classes.aboutBox}>
              <p className={classes.aboutText}>
                Me chamo Carlos, sou graduando em Análise e Desenvolvimento de
                Sistemas na UFRN e ex Bacharelando em Tecnologia da Informação
                na mesma instituição, sou desenvolvedor web com mais de 3 anos
                de experiência, desde 2017 venho projetando e desenvolvendo
                soluções para diversas áreas. Minha principal ocupação
                profissional no momento é como bolsista na universidade onde
                atuo como gerente de projeto e desenvolvedor do site do Museu
                Câmara Cascudo (Maior museu do Rio Grande do Norte).
              </p>
            </div>
            <p className={classes.sectionTitle} id="whatido">
              Oque faço
            </p>
            <div className={classes.services}>
              <div className={classes.servicesBox}>
                <div className={classes.serviceCard}>
                  <Image
                    src="/icon-sistem.png"
                    alt="Imagem web"
                    width={100}
                    height={64}
                  />
                  <h1 className={classes.serviceTitle}>
                    Desenvolvimento de websites e Sistemas web
                  </h1>
                  <p className={classes.serviceText}>
                    Sites institucionais
                    <br /> Blogs
                    <br />
                    Portais de notícias
                    <br />
                    Ecomerces
                    <br />
                    Dashboards
                    <br />
                    Sistemas de gestão
                    <br />
                    Entre outros
                  </p>
                </div>
              </div>
            </div>
            <p className={classes.sectionTitle} id="portfolio">
              Portfólio
            </p>
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div style={{ maxWidth: 1240, width: '100%', height: 600 }}>
                <Carousel />
              </div>
            </div>
            <p className={classes.sectionTitle} id="contact">
              Contato
            </p>
            <div className={classes.aboutBox}>
              <ContactForm />
            </div>
          </>
        </Layout>
      </main>
    </div>
  );
}

export default Home;
