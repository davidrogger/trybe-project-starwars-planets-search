import React, { useContext, useEffect } from 'react';
import styles from '../styles/Table.module.css';
import FilterPainel from './FilterPainel';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import getStarWarsAPI from '../services/starwarsAPI';
import { Context } from '../context/StarwarsProvider';

function Table() {
  const { setData, setFilterResult } = useContext(Context);
  // https://stackoverflow.com/questions/5285995/how-do-you-sort-letters-in-javascript-with-capital-and-lowercase-letters-combin
  function alphabeticNameOrder(array) {
    return array.sort((a, b) => {
      const backIndex = -1;
      const nextIndex = 1;
      if (a.name > b.name) return nextIndex;
      if (a.name < b.name) return backIndex;
      return 0;
    });
  }

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
