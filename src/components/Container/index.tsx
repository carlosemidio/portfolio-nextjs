import React, { ReactNode } from 'react';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

const Container: React.FC<IProps> = ({children}) => {
  return <div className={ styles.container }>{ children }</div>;
}

export default Container;