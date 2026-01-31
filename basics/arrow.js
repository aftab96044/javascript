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

const chai = () => {
    let user = "samuel"
    console.log(this);
    
}
chai()

const add = (n1, n2) => {
    return n1 + n2
}
//another way implicit return
/*
const add = (n1, n2) => (n1 + n2)
*/
console.log(add(2, 3));




