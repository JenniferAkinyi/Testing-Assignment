function calculateEmployeePay(workHrs){
    let baseSalary = 100000;
    let hourlyRate = 1.5;
    let socialSecurity = 0.04;

    if(workHrs > 40){
        let overtime = workHrs - 40;
        let overtimePay = overtime * (baseSalary / 40) * hourlyRate;
        let totalSalary = baseSalary + overtimePay;
        let socialSecurityDeduction = totalSalary * socialSecurity;
        let calculateEmployeePay = totalSalary - socialSecurityDeduction;
        return calculateEmployeePay;
    } else {
        let socialSecurityDeduction = baseSalary * socialSecurity;
        let calculateEmployeePay = baseSalary - socialSecurityDeduction;
        return calculateEmployeePay;
    }
}

module.exports = { calculateEmployeePay };