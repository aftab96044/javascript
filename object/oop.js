const user = {
    username: "aftab",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details");
        console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
}

const userOne = new User("aftab", 19, true)
const userTwo = new User("aman", 20, false)

console.log(userOne.constructor);
console.log(userTwo);




