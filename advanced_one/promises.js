const promiseOne = new Promise(function(resolve, reject){
    //Async tasks
    //DB calls, cryptography

    setTimeout(function(){
       console.log('task completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async 2 complete");
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", address: "Solapur"})
    }, 1000)
})

PromiseThree.then(function(user){
    console.log(user);
    
})






const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "aftab", password: "123"})
        }else{
            reject('ERROR ')
        }

    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
    
}).then((username) => {
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("The promise is either resolved or rejected")
)



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "aftab", password: "123"})
        }else{
            reject('ERROR: P5 wrong ')
        }

    }, 1000)
})

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
        
    }
    
}
consumePromiseFive()



