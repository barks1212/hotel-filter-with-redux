function toTitleCase(str) {
  let strArr = str.split(" ");
  return strArr.map(el => el[0].toUpperCase() + el.substring(1)).join(" ");
}

export default toTitleCase;
