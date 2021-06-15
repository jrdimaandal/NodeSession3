const LoanCalculator = require('./classes/LoanCalculator');

var argv = require('yargs/yargs')(process.argv.slice(2))
    .usage('Usage: $0 -bankName [string] -loanAmount [string] -loanTerm [string]')
    .demandOption(['bankName','loanAmount', 'loanTerm'])
    .argv;

const loanCalc = new LoanCalculator(argv.bankName, argv.loanAmount, argv.loanTerm);
console.log(`Monthly Installment: ${loanCalc.getMonthlyInstallment()}`);