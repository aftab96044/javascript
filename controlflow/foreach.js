const coding = ["js", "ruby", "java", "py", "cpp"]

coding.forEach( function (item){
    console.log(item);
    
} )
console.log();

coding.forEach( (item) => {
    console.log(item);
    
} )
console.log();

function printMe(item){
    console.log(item);
    
}
coding.forEach(printMe)

console.log();

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
} )

const myCoding = [
    {
        languageName: "javascript",
        fileNme: "js"
    },
    {
        languageName: "java",
        fileNme: "java"
    },
    {
        languageName: "python",
        fileNme: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.fileNme);
    
})
// forEach







