import React from 'react';

const OPTIONS = [
  'maior que',
  'menor que',
  'igual a',
];

function InputSelectComparison() {
  return (
    <select
      data-testid="column-filter"
    >
      { OPTIONS.map((option) => (
        <option
          key={ option }
          value={ option }
        >
          { option }
        </option>
      )) }
    </select>
  );
}

export default InputSelectComparison;
