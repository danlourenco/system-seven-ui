import React from 'react';
import styles from './menubar.module.scss';

import Clock from '../clock';

const MenuBar = () => (
  <nav className={ styles.menuBar} >
    <ul>
      <li>¤</li>
      <li>File</li>
      <li>Edit</li>
      <li>View</li>
      <li>Special</li>
    </ul>
    <ul>
      <li>
        <Clock />
      </li>
    </ul>
  </nav>
);

export default MenuBar;