import React, { useContext, useEffect } from 'react';
import styles from '../styles/Table.module.css';
import FilterPainel from './FilterPainel';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import getStarWarsAPI from '../services/starwarsAPI';
import { Context } from '../context/StarwarsProvider';

function Table() {
  const { setData, setfilterResult } = useContext(Context);
  useEffect(() => {
    const getStarwarsPlanets = async () => {
      const { results } = await getStarWarsAPI('planets');
      setData(results);
      setfilterResult(results);
    };
    getStarwarsPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
