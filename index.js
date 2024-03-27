const App = require("./App")

App.createUser("Melissa Pizzato", "melissa@email.com")
App.createUser("Lucas Rohr", "lucas@email.com")
App.createUser("Julia Larsão", "julia@email.com")

App.makeDeposit("melissa@email.com", 100)

App.makeTransference("melissa@email.com", "lucas@email.com", 20)

App.changeInterestRate(10)
App.takeLoan("julia@email.com", 2000, 10)
App.payLoanInstallment("julia@email.com", 0, 0)

console.log(App.findUser("melissa@email.com"))
console.log(App.findUser("melissa@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("julia@email.com"))
console.log(App.findUser("julia@email.com").account)
console.log(App.findUser("julia@email.com").account.loans[0].installments)