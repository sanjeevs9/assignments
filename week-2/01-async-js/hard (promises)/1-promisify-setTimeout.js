/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve("hellp");
        }, n*1000);
    })
}

wait(3).then(data=>{
console.log(data);
})

module.exports = wait;
