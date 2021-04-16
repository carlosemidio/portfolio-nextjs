import React, { Component } from "react";

import { withStyles, WithStyles } from "@material-ui/core/styles";
import createStyles from "@material-ui/core/styles/createStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import MobileDetect from "mobile-detect";

import Card from "./card";
import Carousel from "react-multi-carousel";

type Props = WithStyles<typeof styles> & {
  deviceType?: string;
};

class Index extends Component<Props> {
  static getInitialProps({ req }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers["user-agent"];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = "tablet";
    } else if (md.mobile()) {
      deviceType = "mobile";
    } else {
      deviceType = "desktop";
    }
    return { deviceType };
  }

  state = { isMoving: false };

  render() {
    const { classes } = this.props;
    const projects = [
      {
        image: "/cepac-barueri.png",
        link: "https://www.cepacbarueri.org.br/",
        headline: "Site da ONG CEPAC Barueri",
        description:
          "Desenvolvido com o framework Laravel(php) no backend(api) e o frontend em React.js com o framework Next.js",
      },
      {
        image: "/ofs-cepac-barueri.png",
        headline: "Sistema de gestão da ONG CEPAC Barueri",
        description: "Desenvolvido com o framework Laravel(php)",
      },
      {
        image: "/museu-camara-cascudo.png",
        link: "https://mcc.ufrn.br/",
        headline: "Site do Museu Câmara Cascudo",
        description: "Desenvolvido com o framework Laravel(php)",
      },
      {
        image: "/tuttortv.png",
        link: "https://www.tuttor.tv/",
        headline: "Tuttor tv",
        description:
          "Plataform de cursos online do Instituto Mondelli desenvolvido em Wordpress com o Tema Eduma",
      },
    ];

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1,
      },
    };
    return (
      <div className={classes.root}>
        <Carousel
          /*
          swipeable={false}
          draggable={false}
          */
          responsive={responsive}
          ssr
          infinite={false}
          beforeChange={() => this.setState({ isMoving: true })}
          afterChange={() => this.setState({ isMoving: false })}
          containerClass="first-carousel-container container"
          deviceType={this.props.deviceType}
        >
          {projects.map((card) => {
            return (
              <Card isMoving={this.state.isMoving} {...card} key={card.image} />
            );
          })}
        </Carousel>
      </div>
    );
  }
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
    },
    title: {
      maxWidth: 400,
      margin: "auto",
      marginTop: 10,
    },
  });

export default withStyles(styles)(Index);
