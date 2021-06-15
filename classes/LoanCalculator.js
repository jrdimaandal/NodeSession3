const Metrobank = require('./Metrobank');
const BPI = require('./BPI');
const BDO = require('./BDO');

class LoanCalculator {
    constructor(bankName, loanAmount, loanTerm){
        this.bankName = bankName;
        this.loanAmount = loanAmount;
        this.loanTerm = loanTerm;
    }

    getMonthlyInstallment(){
        let bank;

        switch (this.bankName) {
            case 'Metrobank':
                bank = new Metrobank(this.loanAmount);
                break;
            case 'BPI':
                bank = new BPI(this.loanAmount);
                break;
            case 'BDO':
                bank = new BDO(this.loanAmount);
                break;
            default:
                return 'Bank not found!';
        }

        return bank.getMonthlyInstallment(this.loanTerm);
    }
};

module.exports = LoanCalculator;