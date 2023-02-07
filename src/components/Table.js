import React, { useContext, useEffect } from 'react';
import { Context } from '../context/StarwarsProvider';

import styles from '../styles/Table.module.css';

import FilterPainel from './FilterPainel';
import TableBody from './TableBody';
import TableHeader from './TableHeader';

import getStarWarsAPI from '../services/starwarsAPI';
import alphabeticNameOrder from '../helpers/alphabeticNameOrder';

function Table() {
  const { setData, setFilterResult } = useContext(Context);

  useEffect(() => {
    const getStarwarsPlanets = async () => {
      const { results } = await getStarWarsAPI('planets');
      const orderingResults = alphabeticNameOrder(results);
      setData(orderingResults);
      setFilterResult(orderingResults);
    };
    getStarwarsPlanets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={ styles.search__container }>
      <FilterPainel />
      <div className={ styles.table__container }>
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </div>
  );
}

export default Table;
