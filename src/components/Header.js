import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={ styles.header__container }>
      <div className={ styles.header__title }>
        <strong>
          STAR WARS
        </strong>
        <em>
          PLANETS
        </em>
      </div>
    </header>
  );
}

export default Header;
