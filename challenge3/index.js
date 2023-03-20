//program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary
//propmt user to input Gross Pay

//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let grossPay = prompt('Enter Gross Pay in Ksh: ');

//NSSF calculation
const nssf = 0.06 * grossPay;
const taxablePay = grossPay - nssf
let netSalary;
let nhif;

//PAYE calculation 
let paye;
if (taxablePay <= 24000){
     paye = 0.1 * taxablePay;
     Math.ceil(paye);
     console.log(`PAYE: ${paye}`)
}else if (taxablePay > 24000 && taxablePay <= 32333){
     paye = (1/4) * taxablePay;
     Math.ceil(paye);
     console.log(`PAYE: ${paye}`)
}else if (taxablePay > 32333){
     paye = (3/10) * taxablePay;
     Math.ceil(paye);
     console.log(`PAYE: ${paye}`)
}else{
    console.log("Not paye");
}
console.log(`NSSF: ${nssf}`);

//NHIF calculation

switch(true){
    case grossPay < 6000:
        nhif = 150;
        break
        case grossPay < 8000:
            nhif = 300;
            break
            case grossPay < 12000:
                nhif = 400;
                break
                case grossPay < 15000:
                    nhif = 500;
                    break
                    case grossPay < 20000:
                        nhif = 600;
                        break
                        case grossPay < 25000:
                            nhif = 700;
                            break
                            case grossPay < 30000:
                                nhif = 850;
                                break
                                case grossPay < 35000:
                                nhif = 900;
                                break
                                case grossPay < 40000:
                                nhif = 1000;
                                break
                                case grossPay < 45000:
                                nhif = 1100;
                                break
                                case grossPay < 50000:
                                nhif = 1200;
                                break
                                case grossPay < 60000:
                                nhif = 1300;
                                break
                                case grossPay < 70000:
                                nhif = 1400;
                                break
                                case grossPay < 80000:
                                nhif = 1500;
                                break
                                case grossPay < 90000:
                                nhif = 1600;
                                break
                                default:
                                    nhif = 1700;
}
console.log(`NHIF: ${nhif}`);

netSalary = (grossPay-nhif-nssf-paye);
console.log(`NET SALARY: ${netSalary}`);
