const Account = require("./Account")

module.exports = class User{
    constructor(fullname, email){
        this.fullname = fullname
        this.email = email
        this.account = new Account(this)
    }
}