//-----------for----------

for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
        
        
    }
    
}


let arr = ["aftab", "Batman", "Om"]

for (let k = 0; k < arr.length; k++) {
    const number = arr[k];
    console.log(number);
    
}

//--------break & continue---------

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
    
    
}
console.log();

for (let index = 1; index <= 20; index++) {
    if(index == 5){
       // console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
    
    
}


















