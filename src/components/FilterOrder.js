import React from 'react';
import InputSelectOrder from './InputSelectOrder';
import styles from '../styles/FilterPainel.module.css';
import InputRadioOrder from './InputRadioOrder';

function FilterOrder() {
  return (
    <div className={ styles.filterOrder__container }>
      <InputSelectOrder />
      <InputRadioOrder />
    </div>
  );
}

export default FilterOrder;
