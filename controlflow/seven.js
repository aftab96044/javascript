const myNum = [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]

const newNum = myNum.map( (num) => num + 10)
//const newNum = myNum.map( (num) => { return num + 10})
//use return because of scope
console.log(newNum);

console.log();

const newNums = myNum
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

console.log(newNums);

/*
map() => Transforms each element of an array using a callback function
          ex: Convert numbers to their squares
filter() => Selects elements that meet a condition
          ex: Extract even numbers from a list
*/














