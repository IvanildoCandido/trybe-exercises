let grossSalary = 5000;
let netSalary = null;
let INSS = null;
let IR = null;
let tax = null;
let baseSalary = null;
let deduction = null;

//INSS calc aliquot
if (grossSalary <= 1556.94) {
  INSS = 0.08;
} else if (grossSalary >= 1556.95 && grossSalary <= 2594.92) {
  INSS = 0.09;
} else if (grossSalary >= 2594.93 && grossSalary <= 5189.82) {
  INSS = 0.11;
} else if (grossSalary > 5189.82) {
  INSS = 570.88;
}

//Calc baseSalary
if (INSS < 1) {
  baseSalary = grossSalary - grossSalary * INSS;
} else {
  baseSalary = grossSalary - INSS;
}

//IR calc aliquot
if (baseSalary <= 1903.98) {
  IR = 0;
  deduction = 0;
} else if (baseSalary >= 1903.99 && baseSalary <= 2826.65) {
  IR = 0.075;
  deduction = 142.8;
} else if (baseSalary >= 2826.66 && baseSalary <= 3751.05) {
  IR = 0.15;
  deduction = 354.8;
} else if (baseSalary >= 3751.06 && baseSalary <= 4664.68) {
  IR = 0.225;
  deduction = 636.13;
} else if (baseSalary > 4664.68) {
  IR = 0.275;
  deduction = 869.36;
}

if (IR != 0) {
  tax = baseSalary * IR - deduction;
  netSalary = baseSalary - tax;
} else {
  netSalary = baseSalary;
}

console.log("The net salary is", netSalary);
