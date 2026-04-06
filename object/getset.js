class User{
    constructor(email, pass){
        this.email = email
        this.pass = pass
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get pass(){
        return `${this._pass}aftab`
    }

    set pass(value){
        this._pass = value
    }

}

const aftab = new User("aftab@.in", "sbc")
console.log(aftab);


















