import React from 'react';
import InputSelectOrder from './InputSelectOrder';
import styles from '../styles/FilterPainel.module.css';

function FilterOrder() {
  return (
    <div className={ styles.filterOrder__container }>
      <InputSelectOrder />
    </div>
  );
}

export default FilterOrder;
