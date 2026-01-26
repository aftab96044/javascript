function add(num1, num2){
    //console.log(num1 + num2) returns the result but type is undefined
    return num1 + num2
}
const result = add(3, 5)
console.log("Result: ", result)

function login(username = "aftab"){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(login())

function CartPrice(...num1){
    return num1
}

console.log(CartPrice(200, 400, 500)) //here cartprice has only one value but we are calling multiple parameters
//so we use ... ->rest operator and spread operator









