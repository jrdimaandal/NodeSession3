class Bank {
    constructor(loanAmount){
        this.loanAmount = loanAmount;
        this.interestRate = 0;
    }
    
    getMonthlyInstallment(loanTerm){
        const principal = (this.loanAmount * this.interestRate * loanTerm) + this.loanAmount;
        return principal/loanTerm;
    }
};

module.exports = Bank;