//singleton
//Object.create
//object literals
const Sym = Symbol("key1")

const user = {
    name : "aftab",//here name is also taken as string
    location : "Latur",
    isLogin : false,
    Lastlogin : ["mon", "tue"],
    [Sym] : "mykey1",
}
//two types -> below
console.log(user.name)
console.log(user["location"])

console.log(typeof user[Sym])
console.log(user[Sym])

//obj.freeze(...) will freeze the obj wont allow further updates

console.log(user)






