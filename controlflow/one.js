
if(true){
    console.log("rty");
    
}

const bal = 5000
if(bal > 100) console.log("eufih");


//falsy values
// false, 0, -0, BigInt, 0n, null, undefined, NaN

//truthy values
// "0", 'false', " ", {}, [], function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}
// -----------------------------------------
// Nullish coalescing Operator (??) : null undefined
let val1;
val1 = 5 ?? 10 //for DB 
val2 = null ?? 7 //checks for safe value

console.log(val1, " ", val2);

//-------------Terniary Operator-----------
// condition ? true : false

const price = 80
price >= 50 ? console.log("yes") : console.log("no");







