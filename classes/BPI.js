const Bank = require('./Bank');
class BPI extends Bank {
    constructor (loanAmount) {
        super(loanAmount);

        this.interestRate = .012;
    }
}

module.exports = BPI;