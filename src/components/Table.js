import React from 'react';
import styles from '../styles/Table.module.css';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

function Table() {
  return (
    <table className={ styles.table__container }>
      <TableHeader />
      <TableBody />
    </table>
  );
}

export default Table;
