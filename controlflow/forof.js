//for of

const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
    
}

const greet = "Hello world"

for (const g of greet) {
    console.log(`Each char is ${g}`);
    
}
console.log();

// Maps not iterable
//Unique values
const map = new Map()

map.set('IN', "India")
map.set('USA', "United states of america")
map.set('UN', "United Nations")
map.set('IN', "India" ) //won't print

console.log(map);

for (const [key, value] of map) {
    console.log(key, " :- ", value );
    
}
console.log();

const myObj = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key , value] of myObj) {
    console.log(key,':-',value);
    
}
// object is not iterable in forof so we will use 'forof'

//forof




















