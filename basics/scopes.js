//{} -> scope

/* Actually when we declare a variable with var
in scope({ }) and we try to print it outside of 
scope it will print but const and let won't print
and if we declare the same variable again outside 
of scope with different value it will print the 
previous value so prefer to use 'let' */

var c = 100
let a = 200

if(true)
{
    let a = 5
    const b = 10
    var c = 20
}
const b = 500
console.log(a);
console.log(b);
console.log(c);

















