import React from 'react';
import styles from '../styles/Table.module.css';
import FilterPainel from './FilterPainel';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <div>
      <FilterPainel />
      <table className={ styles.table__container }>
        <TableHeader />
        <TableBody />
      </table>
    </div>
  );
}

export default Table;
