function filtersToArray(obj) {
  const result = [];
  for (let key in obj) {
    result.push(key);
  }
  return result;
}

export default filtersToArray;
