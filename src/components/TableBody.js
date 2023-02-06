import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';
import styles from '../styles/Table.module.css';

function TableBody() {
  const { filterResult, filterNumericResult, filterNumeric } = useContext(Context);

  function movies(name, filmeList) {
    return (
      <ul>
        {filmeList.map((film, index) => (
          <li key={ `${name}-${index}` }>{film}</li>
        ))}
      </ul>
    );
  }
  const filterNumericDisable = filterNumeric.length === 0;
  const displayResult = filterNumericDisable ? filterResult : filterNumericResult;

  return (
    <tbody>
      { displayResult.map(({
        name,
        rotation_period: rotation,
        orbital_period: orbital,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water: surfaceWater,
        population,
        films,
        created,
        edited,
        url,
      }) => (
        <tr key={ name }>
          <td data-testid="planet-name">{ name }</td>
          <td>{ rotation }</td>
          <td>{ orbital }</td>
          <td>{ diameter }</td>
          <td>{ climate }</td>
          <td>{ gravity }</td>
          <td>{ terrain }</td>
          <td>{ surfaceWater }</td>
          <td>{ population }</td>
          <td className={ styles.hyperlink_content }>{ movies(name, films) }</td>
          <td>{ created }</td>
          <td>{ edited }</td>
          <td className={ styles.hyperlink_content }>{ url }</td>
        </tr>
      )) }
    </tbody>
  );
}

export default TableBody;
