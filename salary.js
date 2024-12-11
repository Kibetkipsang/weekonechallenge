//calculate the total salary
let grossSalary = basicSalary + benefits;
// calculate the tax
function calculateTax(grossSalary){
    let tax =0;
if (grossSalary <= 24000){
    tax = grossSalary * 0.1;
}
else if (grossSalary <= 32333){
    tax = 24000*0.1;  //first tax bracket
    tax += (grossSalary - 24000)*0.25;//the second tax bracket
}
else {
    tax = 24000*0.1 ;//first tax bracket
    tax += (32333 - 24000)*0.25;  //the second tax bracket
    tax += ((grossSalary - 32333))*0.3; //third tax bracket
    return tax;
}
}
 //Calculate the NHIF deductions
 function calculateNHIF(grossSalary){
    const nhifRates = [
        { max: 5999, deduction: 150 },
        { max: 7999, deduction: 300 },
        { max: 11999, deduction: 400 },
        { max: 14999, deduction: 500 },
        { max: 19999, deduction: 600 },
        { max: 24999, deduction: 750 },
        { max: 29999, deduction: 850 },
        { max: 34999, deduction: 900 },
        { max: 39999, deduction: 950 },
        { max: 44999, deduction: 1000 },
        { max: 49999, deduction: 1100 },
        { max: 59999, deduction: 1200 },
        { max: 69999, deduction: 1300 },
        { max: 79999, deduction: 1400 },
        { max: 89999, deduction: 1500 },
        { max: 99999, deduction: 1600 },
        { max: Infinity, deduction: 1700 }  
    ];
    for (let rate of nhifRates) {            
        if (grossSalary <= rate.max) {        
            return rate.deduction;       
        }                                               
    }
 }

//  PAYE Function
function calculatePaye(grossSalary) {  //calculate the amount the employee pay
    let tax = 0; // Initializing tax to 0

if (grossSalary > 800000) {
tax += (grossSalary - 800000) * 0.35; // Tax for above 800,000
grossSalary = 800000;
}
if (grossSalary > 500000) {
tax += (grossSalary - 500000) * 0.325; // Tax for 500,001 to 800,000
grossSalary = 500000;
}
if (grossSalary > 32333) {
tax += (grossSalary - 32333) * 0.30; // Tax for 32,334 to 500,000
grossSalary = 32333;
}
if (grossSalary > 24000) {
tax += (grossSalary - 24000) * 0.25; // Tax for 24,001 to 32,333
grossSalary = 24000;
}
if (grossSalary > 0) {
tax += grossSalary * 0.10; // Tax for up to 24,000
}

return Math.floor(tax);
}
// NSSF Calculation
function calculateNssf(grossSalary) {
    let tier1Limit = 7000; 
    let tier2Limit = 36000; 
    let employeeContribution = 0; 
    let employerContribution = 0; 

    if (grossSalary <= tier1Limit) {
       
        employeeContribution = grossSalary * 0.06; 
        employerContribution = employeeContribution; 
    } else if (grossSalary > tier1Limit && grossSalary <= tier2Limit) {
       
        let tier1Contribution = tier1Limit * 0.06;
        let tier2Contribution = (grossSalary - tier1Limit) * 0.06; 
        employeeContribution = tier1Contribution + tier2Contribution;
        employerContribution = employeeContribution; 
    } else {
        
        let tier1Contribution = tier1Limit * 0.06; 
        let tier2Contribution = (tier2Limit - tier1Limit) * 0.06; 
        employeeContribution = tier1Contribution + tier2Contribution;
        employerContribution = employeeContribution; 
    }

    let totalNssfDeductions = employeeContribution + employerContribution; 
    return totalNssfDeductions;
}

// Calculating deductions
const grossAfterNhif = calculateNhif(grossSalary);
const totalPayeDeduction = calculatePaye(grossSalary);
const nssfDeductions = calculateNssf(grossSalary);

const nhifDeductions = grossSalary - grossAfterNhif;
const netSalary = grossAfterNhif - totalPayeDeduction - nssfDeductions;

// Displays deductions and net salary
console.log(`Your NHIF Deductions are: ${nhifDeductions} Ksh`);
console.log(`Your PAYE Deduction is: ${totalPayeDeduction} Ksh`);
console.log(`Your NSSF Deduction is: ${nssfDeductions} Ksh`);
console.log(`Your Net Salary is: ${netSalary} Ksh`);
