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
        switch (this.bankName) {
            case 'Metrobank':
              const metroBankInstance = new Metrobank(this.loanAmount);
              const mbMonthly = metroBankInstance.getMonthlyInstallment(this.loanTerm);
              return mbMonthly;
            case 'BPI':
                const BPIInstance = new BPI(this.loanAmount);
              const bpiMonthly = BPIInstance.getMonthlyInstallment(this.loanTerm);
              return bpiMonthly;
            case 'BDO':
                const BDOInstance = new BDO(this.loanAmount);
                const bdoMonthly = BDOInstance.getMonthlyInstallment(this.loanTerm);
                return bdoMonthly;
            default:
        }
    }
};

module.exports = LoanCalculator;