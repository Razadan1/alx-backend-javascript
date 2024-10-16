export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberofDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };
  return reportObject;
}
