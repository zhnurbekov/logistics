export default function(filter, newFilter) {
  let result = { ...filter, ...newFilter };
  for (let item of Object.entries(result)) {
    if (item[1] === null) {
      delete result[item[0]];
    }
  }
  return result;
}
