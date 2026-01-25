//singleton
//Object.create
//object literals
// const Sym = Symbol("key1")

// const user = {
//     name : "aftab",//here name is also taken as string
//     location : "Latur",
//     isLogin : false,
//     Lastlogin : ["mon", "tue"],
//     [Sym] : "mykey1",
// }
//two types -> below
// console.log(user.name)
// console.log(user["location"])

// console.log(typeof user[Sym])
// console.log(user[Sym])

//obj.freeze(...) will freeze the obj wont allow further updates

//console.log(user)

//-----------------------------------------

const User = {}
User.name = "aftab"
User.login = false
console.log(User)

const regUser = {
    email: "sjdfhsi.com",
    fullname: {
        username: {
            firstName : "aftab",
            lastName : "shaikh"
        }
    }
}
console.log(regUser.fullname)
console.log(regUser.fullname.username.firstName)

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
//const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2)
console.log(obj3)

const users = [
    {
    },
    {
    },
    {
    },
]
users[1].email
console.log(Object.keys(User))













