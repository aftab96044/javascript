class User{
    constructor(username){
        this.username = username
    }

    loginMe(){
        console.log(`USERNAME is ${this.username}`);
        
    }
}
class Teacher extends User{
    constructor(username, email, pass)
    {
        super(username)
        this.email = email
        this.pass = pass
       
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")

chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.loginMe()

console.log(chai instanceof Teacher);











