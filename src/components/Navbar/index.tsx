import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const Navbar: React.FC = () => {
  return <ul className={styles.navbar}>
  <li>
    <Link href='/'>INÍCIO</Link>
  </li>
  <li>
    <Link href="/#whatido">O QUE FAÇO</Link>
  </li>
  <li>
    <Link href="/#portfolio">PORTFÓLIO</Link>
  </li>
  {/* <li>
    <Link href="/#contact">FALE COMIGO</Link>
  </li> */}
</ul>;
}

export default Navbar;