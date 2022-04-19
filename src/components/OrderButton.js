import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

function OrderButton() {
  const {
    filterOrder,
    filterResult,
    setFilterNumericResult,
    setFilterResult,
  } = useContext(Context);

  function sortOrder(columnA, columnB, sort) {
    const numberA = Number(columnA);
    const numberB = Number(columnB);
    const backIndex = -1;
    const nextIndex = 1;
    if (!numberA) return nextIndex;
    if (!numberB) return backIndex;
    switch (sort) {
    case 'asc':
      return numberA - numberB;
    default:
      return numberB - numberA;
    }
  }

  function orderDisplay() {
    const newOrderDisplay = [...filterResult];
    const { column, sort } = filterOrder;

    newOrderDisplay
      .sort((columnA, columnB) => sortOrder(columnA[column], columnB[column], sort));

    setFilterNumericResult(newOrderDisplay);
    setFilterResult(newOrderDisplay);
  }

  return (
    <button
      type="button"
      data-testid="column-sort-button"
      onClick={ orderDisplay }
    >
      Ordenar
    </button>
  );
}

export default OrderButton;
