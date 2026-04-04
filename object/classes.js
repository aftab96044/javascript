class user{
    constructor(username, email, pass){
        this.username = username
        this.email = email
        this.pass = pass
    }

    encryptPass(){
        return `${this.pass}abc`
    }

}

const chai = new user("chai", "aidsj@gmail.com", "123")

console.log(chai.encryptPass());











