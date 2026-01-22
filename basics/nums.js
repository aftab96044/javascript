const score = 400
console.log(score)

const balance = new Number(200)
console.log(balance)
console.log(balance.toString())
console.log(balance.toFixed(3))

const num = 123.89894

console.log(num.toPrecision(3))

console.log(Math.ceil(3.1))

console.log(Math.floor(4.9))

console.log(((Math.random()*10) + 1).toFixed(0))
//random answers b/w 0-1 so *10 and +1 to avoid 0 and tofixed 0

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)

