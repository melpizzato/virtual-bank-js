const User = require("./entities/User")
const Deposit = require("./entities/Deposit")
const Transfer = require("./entities/Transfer")
const Loan = require("./entities/Loan")

module.exports = class App {
    static #users = []

    static findUser(email){
        const user = this.#users.find(u => u.email === email)
        return user ?? null
    }
    
    static createUser(fullname, email){
        const userExists = App.findUser(email)

        if (!userExists) {
            this.#users.push(new User(fullname, email))
        }
    }  

    static makeDeposit(email, value){
        const user = App.findUser(email)
        if (user) {
            const newDeposit = new Deposit(value)
            user.account.addDeposit(newDeposit)
        }
    }

    static makeTransference(senderEmail, receiverEmail, value){
        const sender = App.findUser(senderEmail)
        const receiver = App.findUser(receiverEmail)

        if(sender && receiver){
            const newTranfer = new Transfer(sender, receiver, value)
            sender.account.addTransfer(newTranfer)
            receiver.account.addTransfer(newTranfer)
        }
        
    }

    static takeLoan(email, value, numberOfInstallments){
        const user = App.findUser(email)

        if(user) {
            const newLoan = new Loan(value, numberOfInstallments)
            user.account.addLoan(newLoan)
        }
        
    }

    static changeInterestRate(newRate){
        Loan.interestRate = newRate
    }

    static payLoanInstallment(email, loanNumber, installmentNumber) {
        const user = App.findUser(email)

        if(user) {
            user.account.payLoanInstallment(loanNumber, installmentNumber)
        }
    }
}