import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
    </div>
  );
}
