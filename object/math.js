
// console.log(Math.PI);

// Math.PI = 5
// console.log(Math.PI);

// pi value cannot be changed or overridden

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor);

const chai = {
    name: 'ginger',
    price: 6,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false,


})

console.log(Object.getOwnPropertyDescriptor(chai));






