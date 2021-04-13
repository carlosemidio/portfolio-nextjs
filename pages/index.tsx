import Head from "next/head";
import Layout from "../components/Layout";
import makeStyles from "@material-ui/core/styles/makeStyles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#000000",
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
        marginLeft: 20,
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
    backgroundBox: {
      position: "relative",
      width: "100%",
      height: 28,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textFromLeft: {
      fontSize: 28,
      color: "#ffffff",
      animationName: "$fadeLeft",
      animationDuration: "3s",
      left: 0,
      padding: 15,
    },
    textFromRight: {
      fontSize: 28,
      color: "#ffffff",
      animationName: "$fadeRight",
      animationDuration: "3s",
      left: 0,
      padding: 15,
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
            <a href="#" data-id="about">
              QUEM SOU
            </a>
          </li>
          <li>
            <a href="#" data-id="whatido">
              O QUE FAÇO
            </a>
          </li>
          <li>
            <a href="#" data-id="home">
              <img
                src="/perfil.jpeg"
                alt="Imagem de perfil"
                className={classes.profileImage}
              />
            </a>
          </li>
          <li>
            <a href="#" data-id="portfolio">
              PORTFÓLIO
            </a>
          </li>
          <li>
            <a href="#" data-id="contact">
              FALE COMIGO
            </a>
          </li>
        </ul>
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
      </main>
    </div>
  );
}

export default Home;
