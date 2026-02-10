
const num = [1, 2, 4, 8]
//run it and see
const newNum = num.reduce(function (acc, cv)
{
    console.log(`acc: ${acc} and curvalue: ${cv}`);
    
    return acc + cv
}, 0)

console.log(newNum);

console.log();

const myTotal = num.reduce( (acc, cv) => acc+cv, 0)

console.log(myTotal);

// reduce() reduces to single value


















