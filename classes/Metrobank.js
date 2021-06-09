
const Bank = require('./Bank');

class Metrobank extends Bank {
    constructor (loanAmount) {
        super(loanAmount);

        this.interestRate = .015;
    }
}

module.exports = Metrobank;