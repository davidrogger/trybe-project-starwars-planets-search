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

export default alphabeticNameOrder;
