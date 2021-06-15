const Bank = require('./Bank');
class BDO extends Bank {
    constructor (loanAmount) {
        super(loanAmount);

        this.interestRate = .017;
    }
}

module.exports = BDO;