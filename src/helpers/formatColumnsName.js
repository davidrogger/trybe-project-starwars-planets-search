function capitalize(title) {
  return title[0].toUpperCase() + title.substring(1);
}

function replaceUnderscore(title) {
  const hasUnderscore = title.search('_') > 0;

  if (hasUnderscore) {
    return title.replace('_', ' ');
  }

  return title;
}

function formatColumnsName(titles) {
  const residentsRemoved = titles.filter((title) => title !== 'residents');
  const titleCapitalizated = residentsRemoved.map((title) => capitalize(title));
  return titleCapitalizated.map((title) => replaceUnderscore(title));
}

export default formatColumnsName;
