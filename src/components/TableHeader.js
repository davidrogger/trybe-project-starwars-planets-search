import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

function TableHeader() {
  const { columnTitles } = useContext(Context);
  return (
    <thead>
      <tr>
        { columnTitles
          .map((title) => (
            <th key={ title }>
              {title}
            </th>
          )) }
      </tr>
    </thead>
  );
}

export default TableHeader;
