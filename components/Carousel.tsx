import React, { Component } from 'react';

import { withStyles, WithStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import MobileDetect from 'mobile-detect';

import Card from './Card';
import Carousel from 'react-multi-carousel';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Project from '../components/Project';

type Props = WithStyles<typeof styles> & {
  deviceType?: string;
  openModal?: () => void;
};

class Index extends Component<Props> {
  static getInitialProps({ req }) {
    let userAgent;
    let deviceType;
    if (req) {
      userAgent = req.headers['user-agent'];
    } else {
      userAgent = navigator.userAgent;
    }
    const md = new MobileDetect(userAgent);
    if (md.tablet()) {
      deviceType = 'tablet';
    } else if (md.mobile()) {
      deviceType = 'mobile';
    } else {
      deviceType = 'desktop';
    }
    return { deviceType };
  }

  state = { isMoving: false, openModal: false, project: null };

  render() {
    const { classes } = this.props;
    const projects = [
      {
        image: '/projects/cepac/card.jpeg',
        images: [
          '/projects/cepac/card.jpeg',
          '/projects/cepac/card2.jpeg',
          '/projects/cepac/card3.jpeg',
          '/projects/cepac/card4.jpeg',
          '/projects/cepac/card5.jpeg',
        ],
        link: 'https://www.cepacbarueri.org.br/',
        headline: 'Site da ONG CEPAC Barueri',
        description:
          'Desenvolvido com o framework Laravel(php) no backend(api) e o frontend em React.js com o framework Next.js',
      },
      {
        image: '/projects/ofs/card.jpeg',
        images: [
          '/projects/ofs/card.jpeg',
          '/projects/ofs/card2.jpeg',
          '/projects/ofs/card3.jpeg',
          '/projects/ofs/card4.jpeg',
          '/projects/ofs/card5.jpeg',
        ],
        headline: 'Sistema de gestão da ONG CEPAC Barueri',
        description: 'Desenvolvido com o framework Laravel(php)',
      },
      {
        image: '/projects/mcc/card.jpeg',
        images: [
          '/projects/mcc/card.jpeg',
          '/projects/mcc/card2.jpeg',
          '/projects/mcc/card3.jpeg',
          '/projects/mcc/card4.jpeg',
          '/projects/mcc/card5.jpeg',
        ],
        link: 'https://mcc.ufrn.br/',
        headline: 'Site do Museu Câmara Cascudo',
        description: 'Desenvolvido com o framework Laravel(php)',
      },
      {
        image: '/projects/tuttortv/card.jpeg',
        images: [
          '/projects/tuttortv/card.jpeg',
          '/projects/tuttortv/card2.jpeg',
          '/projects/tuttortv/card3.jpeg',
          '/projects/tuttortv/card4.jpeg',
          '/projects/tuttortv/card5.jpeg',
        ],
        link: 'https://www.tuttor.tv/',
        headline: 'Tuttor tv',
        description:
          'Plataform de cursos online do Instituto Mondelli desenvolvido em Wordpress com o Tema Eduma',
      },
      {
        image: '/projects/portaldatropical/card.jpeg',
        images: [
          '/projects/portaldatropical/card.jpeg',
          '/projects/portaldatropical/card2.jpeg',
          '/projects/portaldatropical/card3.jpeg',
          '/projects/portaldatropical/card4.jpeg',
          '/projects/portaldatropical/card5.jpeg',
        ],
        link: 'https://portaldatropical.com.br/',
        headline: 'Portal da TV Tropical',
        description:
          'Um dos maiores portais de notícias do Rio Grande do Norte desenvolvido com Reactjs no frontend e Laravel no backend. Serviço prestado como PJ na Agência Maxmeio (RN)',
      },
      {
        image: '/projects/siscrede/card.png',
        images: [
          '/projects/siscrede/card.png',
          '/projects/siscrede/card2.png',
          '/projects/siscrede/card3.png',
          '/projects/siscrede/card4.png',
          '/projects/siscrede/card5.png',
        ],
        headline: 'Sistema de gestão Siscred',
        description: `Sistema de gestão para engenheiros que prestam serviços como autônomos.
        As funcionalidades incluem, controle de serviços e despesas e vários relatórios de faturamento`,
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
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.openModal}
          onClose={() => this.setState({ openModal: false })}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <>
            <Fade in={this.state.openModal}>
              <Project
                project={this.state.project}
                closeModal={() => this.setState({ openModal: false })}
              />
            </Fade>
          </>
        </Modal>
        <Carousel
          /*
          swipeable={false}
          draggable={false}
          */
          responsive={responsive}
          ssr
          infinite={true}
          autoPlay={!this.state.openModal}
          beforeChange={() => this.setState({ isMoving: true })}
          afterChange={() => this.setState({ isMoving: false })}
          containerClass="first-carousel-container container"
          deviceType={this.props.deviceType}
        >
          {projects.map((_project) => {
            return (
              <Card
                isMoving={this.state.isMoving}
                {..._project}
                key={_project.image}
                openModal={() =>
                  this.setState({ openModal: true, project: _project })
                }
              />
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
      textAlign: 'center',
    },
    title: {
      maxWidth: 400,
      margin: 'auto',
      marginTop: 10,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      'z-index': '1000 !important',
    },
  });

export default withStyles(styles)(Index);
