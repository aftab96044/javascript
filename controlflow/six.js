const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,10]

console.log(myNums.filter( (num) => num > 4)) 

console.log();

console.log(myNums.filter( (num) => {
    return num > 3
}) )


console.log();

const newNums = []

myNums.forEach( (num) => {
    if(num > 6)
    {
        newNums.push(num)
    }
})

console.log(newNums);


















