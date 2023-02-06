import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

// Estilos
import styles from '../styles/FilterPainel.module.css';

function RemoveFilterBtn() {
  const { setFilterNumeric } = useContext(Context);
  return (
    <div className={ styles.removeBtn_container }>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterNumeric([]) }
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default RemoveFilterBtn;
