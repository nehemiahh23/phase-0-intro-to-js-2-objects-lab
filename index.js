// Write your solution in this file!
const employee = {
    name: "",
    streetAddress: ""
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const samployee = {...employee}
    samployee[key] = value

    return samployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value

    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeClone = {...employee}
    delete employeeClone[key]

    return employeeClone
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}