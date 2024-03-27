module.exports = class Account {
    #balance

    constructor(user){
        this.owner = user
        this.#balance = 0
        this.deposits = []
        this.loans = []
        this.transfers = []
    }

    get balance(){
        return this.#balance
    }

    addDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }

    addLoan(loan){
        this.#balance += loan.value
        this.loans.push(loan)
    }

    addTransfer(transfer){
        if (transfer.receiver.email === this.owner.email){
            this.#balance += transfer.value
            this.transfers.push(transfer)
        } else if (transfer.sender.email === this.owner.email) {
            this.#balance -= transfer.value
            this.transfers.push(transfer)
        }
    }

    payLoanInstallment(loanNumber, installmentNumber){
        console.log(this.loans[loanNumber].installments[installmentNumber].status)
        this.loans[loanNumber].installments[installmentNumber].status = 'paid'
    }
}