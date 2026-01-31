const user = {
    username : "aftab",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()//will replace the value of username with sam

console.log(this);

// function chai(){
//     console.log(this);
    
// }
// chai()









