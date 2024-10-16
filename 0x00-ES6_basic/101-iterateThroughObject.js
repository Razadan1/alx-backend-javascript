export default function iterateThroughObject(reportWithIterator) {
  // Convert the iterator to an array and join the elements with " | "
  return Array.from(reportWithIterator).join(' | ');
}
