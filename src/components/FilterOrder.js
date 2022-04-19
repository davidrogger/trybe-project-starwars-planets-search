import React from 'react';
import InputSelectOrder from './InputSelectOrder';
import styles from '../styles/FilterPainel.module.css';
import InputRadioOrder from './InputRadioOrder';
import OrderButton from './OrderButton';

function FilterOrder() {
  return (
    <div className={ styles.filterOrder__container }>
      <InputSelectOrder />
      <InputRadioOrder />
      <OrderButton />
    </div>
  );
}

export default FilterOrder;
