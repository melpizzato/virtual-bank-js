const Installment = require("./Installment")

module.exports = class Loan {
    static #interestRate = 1.05

    constructor(value, numberOfInstallments) {
        this.value = value
        this.createdAt = new Date()
        this.installments = []
        for (let i = 0; i <= numberOfInstallments; i++){
            this.installments.push(new Installment((value * Loan.#interestRate) / numberOfInstallments, i))
        }
    }

    static get interestRate(){
        return Loan.#interestRate
    }

    static set interestRate(newPercentage){
        Loan.#interestRate = 1 + (newPercentage/100)
    }
}