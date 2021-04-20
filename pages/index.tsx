import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";
import Carousel from "../components/Carousel";
import ContactForm from "../components/ContactForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundImage: "url('/background.png')",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
      backgroundAttachment: "fixed",
      position: "relative",
      zIndex: 0,
      "&::after": {
        content: '""',
        opacity: ".7",
        zIndex: -1,
        backgroundColor: "#000000",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
      },
    },
    navbar: {
      listStyle: "none",
      color: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 80,
      paddingBottom: 80,
      "& > li": {
        marginLeft: 40,
        "& > a": {
          color: "#ffffff",
          fontSize: 24,
          fontFamily: "Montserrat-Regular",
          textDecoration: "none",
        },
      },
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: "50%",
    },
    profileMobile: {
      paddingTop: 20,
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
        justifyContent: "center",
      },
    },
    backgroundBox: {
      position: "relative",
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
    textFromLeft: {
      fontSize: 60,
      fontFamily: "Montserrat-Regular",
      color: "#ffffff",
      animationName: "$fadeLeft",
      animationDuration: "3s",
      left: 0,
      padding: 15,
      [theme.breakpoints.down("xs")]: {
        fontSize: 28,
      },
    },
    textFromRight: {
      fontSize: 60,
      fontFamily: "Montserrat-Regular",
      color: "#ffffff",
      animationName: "$fadeRight",
      animationDuration: "3s",
      left: 0,
      padding: 15,
      [theme.breakpoints.down("xs")]: {
        fontSize: 28,
      },
    },
    "@keyframes fadeLeft": {
      "0%": {
        transform: "translateX(-400%)",
      },
      "100%": {
        transform: "translateX(0%)",
      },
    },
    "@keyframes fadeRight": {
      "0%": {
        transform: "translateX(400%)",
      },
      "100%": {
        transform: "translateX(0%)",
      },
    },
    sectionTitle: {
      paddingTop: 100,
      width: "100%",
      fontSize: 100,
      fontFamily: "Montserrat-Regular",
      textAlign: "center",
      color: "#ffffff",
      [theme.breakpoints.down("xs")]: {
        fontSize: 60,
      },
    },
    aboutBox: {
      display: "flex",
      justifyContent: "center",
      padding: 15,
      width: "100%",
    },
    aboutText: {
      color: "#ffffff",
      fontSize: 24,
      fontFamily: "Montserrat-Regular",
      maxWidth: 600,
    },
    services: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      width: "100%",
    },
    servicesBox: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 15,
      maxWidth: 1240,
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        padding: 0,
      },
    },
    serviceCard: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 15,
      width: "100%",
      [theme.breakpoints.down("xs")]: {
        padding: 0,
      },
    },
    serviceTitle: {
      color: "#ffffff",
      fontFamily: "Montserrat-Regular",
    },
    serviceText: {
      color: "#ffffff",
      fontSize: 24,
      fontFamily: "Montserrat-Regular",
      maxWidth: "100%",
    },
  })
);

function Home() {
  const classes = useStyles();

  if (typeof window === "object") {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
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
        <meta property="og:image" content="/perfil.jpeg" />
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
          href="/fonts/montserrat/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/montserrat/Montserrat-Light.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={classes.root} id="home">
        <Layout>
          <>
            <ul className={classes.navbar}>
              <li>
                <a href="#about">QUEM SOU</a>
              </li>
              <li>
                <a href="#whatido">O QUE FAÇO</a>
              </li>
              <li>
                <img
                  src="/perfil.jpeg"
                  alt="Imagem de perfil"
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
              <img
                src="/perfil.jpeg"
                alt="Imagem de perfil"
                className={classes.profileImage}
              />
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
                  <img
                    src="/icon-sistem.png"
                    alt="Imagem web"
                    style={{ width: 100, height: "auto" }}
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
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ maxWidth: 1240, width: "100%", height: 600 }}>
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
