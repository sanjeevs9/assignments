jff
// <!-- 
// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 
//  -->
const { log } = require("console");
const fs=require("fs");

 function read(){
    fs.readFile("C:\\github\\assignments\\week-2\\01-async-js\\new.txt","utf-8" ,function(err,data){
        if(data){
            console.log(data)
        }
    } ) 
}
read();
hello()
function hello(){
    let a=0;
    for(let i=0;i<10000000000;i++){
        a+=i;
    }
    console.log(a);

}
