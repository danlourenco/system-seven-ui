import React from 'react';
import styles from './desktop.module.scss';

const Desktop = ({ children }) => (
  <main className={ styles.desktop }>
    { children }
  </main>
);

export default Desktop;