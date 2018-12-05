import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <NavLink to="/">
          Home
        </NavLink>
        <NavLink to="/counter">
          Counter
        </NavLink>
      </div>
    );
  }
}
