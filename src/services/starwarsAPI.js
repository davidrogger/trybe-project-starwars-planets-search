import starWarsPlanets from '../testData';

// const URL = 'https://swapi-trybe.herokuapp.com/api/';

// export const getStarWarsAPI = async (endpoint) => {
//   const response = await fetch(`${URL}${endpoint}`);
//   const data = await response.json();
//   return data;
// };

const getStarWarsData = async () => starWarsPlanets;

export default getStarWarsData;
