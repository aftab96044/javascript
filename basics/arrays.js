const myArr = [0, 1, 2, 3, 4, 5]

// makes shallow copy in js(same reference)

myArr.push(6)
console.log(myArr)
const newArr = myArr.join();
console.log(newArr)

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ",myArr)

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr)
console.log(myn2)

//slice doesnt include second para
//splice includes second para also removes that part from array

//--------------------------------------------------------

const marvel = ["thor", "ironman"]
const dc = ["batman", "superman"]

//marvel.push(dc)
// console.log(marvel)
// console.log(marvel[2][1])

// const h = marvel.concat(dc)  
// console.log(h)

const a = [...marvel, ...dc]
console.log(a)

//push pushes th eentire array as array 
//concat adds the arrays's elements not whole array

//Array.isArray(...) checks whether it is an array
//Array.from(...) converts it into an array




