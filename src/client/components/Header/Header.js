import React from 'react';

import styles from './Header.scss';
import {NavLink} from 'react-router-dom';

function Header({children}) {
  return (
    <div className={styles.header}>
    <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/counter'>
        Counter
      </NavLink>
    </div>
  );
}

export default Header;
