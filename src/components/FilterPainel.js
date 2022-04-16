import React from 'react';
import styles from '../styles/FilterPainel.module.css';
import InputFilter from './InputFilter';

function FilterPainel() {
  return (
    <div className={ styles.painel__container }>
      <div className={ styles.painel__head }>
        <InputFilter />
      </div>
    </div>
  );
}

export default FilterPainel;
