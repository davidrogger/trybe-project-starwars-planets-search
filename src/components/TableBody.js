import React, { useContext } from 'react';
import { Context } from '../context/StarwarsProvider';

function TableBody() {
  const { filterResult } = useContext(Context);

  function filmes(name, filmeList) {
    return (
      <ul>
        {filmeList.map((film, index) => (
          <li key={ `${name}-${index}` }>{film}</li>
        ))}
      </ul>
    );
  }

  return (
    <tbody>
      { filterResult.map(({
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
          <td>{ name }</td>
          <td>{ rotation }</td>
          <td>{ orbital }</td>
          <td>{ diameter }</td>
          <td>{ climate }</td>
          <td>{ gravity }</td>
          <td>{ terrain }</td>
          <td>{ surfaceWater }</td>
          <td>{ population }</td>
          <td>{ filmes(name, films) }</td>
          <td>{ created }</td>
          <td>{ edited }</td>
          <td>{ url }</td>
        </tr>
      )) }
    </tbody>
  );
}

export default TableBody;
