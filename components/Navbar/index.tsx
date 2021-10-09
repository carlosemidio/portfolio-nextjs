import React from 'react';
import useStyles from '../../styles/home';

// import { Container } from './styles';

const Navbar: React.FC = () => {
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
        <ul className={classes.navbar}>
          <li><a href="/#about">QUEM SOU</a></li>
          <li><a href="/#whatido">O QUE FAÇO</a></li>
          <li><img
                src="/perfil.jpeg"
                alt="Imagem de perfil"
                className={classes.profileImage}
            /></li>
          <li><a href="/#portfolio">PORTFÓLIO</a></li>
          <li><a href="/blog">BLOG</a></li>
          <li><a href="/#contact">CONTATO</a></li>
        </ul>
        <div className={classes.profileMobile}>
          <img
            src="/perfil.jpeg"
            alt="Imagem de perfil"
            className={classes.profileImage}
          />
        </div>
      </div>
    );
}

export default Navbar;