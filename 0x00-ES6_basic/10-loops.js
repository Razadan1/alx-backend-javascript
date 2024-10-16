export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  for (const value of array) {
    // eslint-disable-next-line no-param-reassign
    array[index] = appendString + value;
    // eslint-disable-next-line no-plusplus
    index++;
  }

  return array;
}
