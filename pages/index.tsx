import Head from "next/head";
import Layout from "../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
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
    },
    textFromLeft: {
      fontSize: 60,
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
    about: {
      display: "flex",
      justifyContent: "center",
      marginTop: 600,
      color: "#ffffff",
      fontSize: 18,
      padding: 15,
    },
  })
);

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main className={classes.root} id="home">
        <Layout />
        <ul className={classes.navbar}>
          <li>
            <a href="#about">QUEM SOU</a>
          </li>
          <li>
            <a href="#" id="whatido">
              O QUE FAÇO
            </a>
          </li>
          <li>
            <a href="#" id="home">
              <img
                src="/perfil.jpeg"
                alt="Imagem de perfil"
                className={classes.profileImage}
              />
            </a>
          </li>
          <li>
            <a href="#" id="portfolio">
              PORTFÓLIO
            </a>
          </li>
          <li>
            <a href="#" id="contact">
              FALE COMIGO
            </a>
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
            Desenvolvimento de sites e sistemas web
          </div>
        </div>
        <div className={classes.backgroundBox}>
          <div className={classes.textFromRight}>
            Soluções sob medida para a sua empresa
          </div>
        </div>
        <div className={classes.about} id="about">
          Sou o Carlos, desenvolvedor web com mais de 3 anos de experiência.
          <br /> Possou certificação em desenvolvimento frontend. <br />
          Trabalho com as liguagens node e php no backend e tenho bastante
          experiência com devops. <br /> Atualmente atuo como freelancer
          fullstack/devops. <br /> Nesse contexto consigo desenvolver uma
          aplicação desde o levantamento de requisitos ao deploy (publicar na
          web).
        </div>
      </main>
    </div>
  );
}

export default Home;
