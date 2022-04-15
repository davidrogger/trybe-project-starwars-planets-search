const URL = 'https://swapi-trybe.herokuapp.com/api/';

const getStarWarsAPI = async (endpoint) => {
  const response = await fetch(`${URL}${endpoint}`);
  const data = await response.json();
  return data;
};

export default getStarWarsAPI;
