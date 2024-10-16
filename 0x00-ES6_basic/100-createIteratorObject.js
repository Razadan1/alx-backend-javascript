export default function createIteratorObject(report) {
  // Get all employees from each department
  const allEmployees = Object.values(report
    .allEmployees).flat(); // Flatten arrays into a single array

  // Return an iterator object
  return {
    // Define the iterator using Symbol.iterator
    * [Symbol.iterator]() {
      for (const employee of allEmployees) {
        yield employee; // Yield each employee
      }
    },
  };
}
