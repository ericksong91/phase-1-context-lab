/* Your Code Here */
//create employee record, test cases

let submitArray = [
    ["Eric", "Song", "Engineer", 25], ["Julius", "Caesar", "General", 27]
]

let employeesMax = createEmployeeRecords(submitArray) //Submitting example employee record
let eric = employeesMax["0"]
let julius = employeesMax["1"]
let employeesNow = [eric, julius]

//Functions for handling records

function createEmployeeRecord(array) {
    let newObj = {}

    newObj.firstName = array[0]
    newObj.familyName = array[1]
    newObj.title = array[2]
    newObj.payPerHour = array[3]
    newObj.timeInEvents = []
    newObj.timeOutEvents = []

    return newObj
}

function createEmployeeRecords(aOfArrays) {
    let empRecords = aOfArrays.map(createEmployeeRecord)
    //Uses createEmployeeRecord function on every element (array) inside the employee record array
    // console.log(empRecords)
    return empRecords
}

const createTimeInEvent = function (dateStamp) {
    let date = dateStamp.split(" ")
    let timeIn = {
        type: "TimeIn",
        hour: parseInt(date[1]),
        date: date[0]
    }

    this.timeInEvents.push(timeIn)

    return this
}

const createTimeOutEvent = function (dateStamp) {
    let date = dateStamp.split(" ")
    let timeOut = {
        type: "TimeOut",
        hour: parseInt(date[1]),
        date: date[0]
    }

    this.timeOutEvents.push(timeOut)

    return this
}

const hoursWorkedOnDate = function (dateForm) {

    //Finds exact time checked in and out using the array find function
    const inEvent = this.timeInEvents.find(inEvent => inEvent.date === dateForm)
    const outEvent = this.timeOutEvents.find(outEvent => outEvent.date === dateForm)

    //return clocked out time minus clocked in time to get amount of hours worked. Divide by 100 since on 24 hour system.

    return (outEvent.hour - inEvent.hour) / 100

}

const wagesEarnedOnDate = function (dateForm) {
    //return simple calculation of pay per hour times hours worked.
    return hoursWorkedOnDate.call(this, dateForm) * this.payPerHour
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName = function (srcArray, firstName) {
    //takes employee record array, using find again with callback func
    //callback func just uses dot notation to check which object has the firstName you're looking for
    return srcArray.find(rec => rec.firstName === firstName)

}

const calculatePayroll = function (array) {
    //Calculates total payroll that company has to give
    //Argument is an array of employee records, stored as objects in the array

    //Have a variable that makes an array of employees

    debugger 

    console.log(array)
    console.log(array[0])
    console.log(array[1])

    console.log(" ")

    //have a function for running AllWagesFor for every employee, throws it into an array using map

    let totalPayArr = array.map(i => allWagesFor.call(i))

    //Function that mutates new array into a final total in $ amount using reduce

    const reducer = (accu, init) => accu + init;
    let payrollFinal = totalPayArr.reduce(reducer, 0)

    console.log(`Final payroll cost is: $${payrollFinal}`)

    return payrollFinal
}

console.log(eric)

console.log(" ")

console.log(julius)

console.log(" ")

julius = createTimeInEvent.call(julius, "0044-03-14 0900")
julius = createTimeOutEvent.call(julius, "0044-03-14 2100")
julius = createTimeInEvent.call(julius, "0044-03-15 0900")
julius = createTimeOutEvent.call(julius, "0044-03-15 1100")

eric = createTimeInEvent.call(eric, "2000-12-01 0700")
eric = createTimeOutEvent.call(eric, "2000-12-01 1400")
eric = createTimeInEvent.call(eric, "2000-12-05 0700")
eric = createTimeOutEvent.call(eric, "2000-12-05 1400")

console.log(eric)

console.log(" ")

console.log(julius)

console.log(" ")

console.log(allWagesFor.call(eric))
console.log(allWagesFor.call(julius))

console.log(" ")

console.log(findEmployeeByFirstName(employeesMax, "Eric"))

calculatePayroll(employeesNow)

//End test cases



