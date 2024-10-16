export default function createEmployeesObject(departmentName, employees) {
  const employer = {
    [departmentName]:
      employees,
  };
  return employer;
}
